import pandas as pd
import sqlite3
import os

def pandas_dtype_to_sqlite_type(dtype):
    """Maps pandas data types to SQLite data types."""
    if pd.api.types.is_integer_dtype(dtype):
        return "INTEGER"
    elif pd.api.types.is_float_dtype(dtype):
        return "REAL"
    elif pd.api.types.is_bool_dtype(dtype):
        return "INTEGER" # SQLite stores booleans as 0 or 1
    elif pd.api.types.is_datetime64_any_dtype(dtype):
        return "TEXT" # Store dates as ISO strings
    else:
        return "TEXT" # Default for strings and other types

def import_csv_to_sqlite(csv_file_path, db_file_path, table_name):
    """
    Imports data from a CSV file into a SQLite database.

    Args:
        csv_file_path (str): Path to the CSV file.
        db_file_path (str): Path to the SQLite database file.
        table_name (str): Name of the table to create/insert data into.
    """
    if not os.path.exists(csv_file_path):
        print(f"Error: CSV-Datei '{csv_file_path}' nicht gefunden.")
        return

    try:
        # Read the CSV file into a pandas DataFrame
        df = pd.read_csv(
            csv_file_path,
            encoding='latin1', # Try 'latin1' or 'cp1252' if 'utf-8' fails
            thousands=',', # Tells pandas to treat commas as thousands separators for numeric columns
            converters={
                'Price (USD)': lambda x: x.replace('$', '').strip() if isinstance(x, str) else x
            }
        )

        print(f"CSV-Datei '{csv_file_path}' erfolgreich gelesen.")
        print(f"Anzahl der Zeilen: {len(df)}")
        print(f"Spalten: {df.columns.tolist()}")

        # Clean column names for SQL (replace spaces, special chars)
        df.columns = [col.replace(' ', '_').replace('.', '').replace('-', '_').replace('(', '').replace(')', '').strip() for col in df.columns]
        # Ensure columns are valid SQLite identifiers (e.g., start with letter/underscore)
        df.columns = ['_' + col if not col[0].isalpha() and not col[0] == '_' else col for col in df.columns]

        # Connect to SQLite database
        with sqlite3.connect(db_file_path) as conn:
            cursor = conn.cursor()

            # --- Create Table Schema ---
            columns_with_types = []
            for col_name, dtype in df.dtypes.items():
                sqlite_type = pandas_dtype_to_sqlite_type(dtype)
                col_definition = f'"{col_name}" {sqlite_type}'

                # Check if the column is named 'ID' (case-insensitive) and make it the PRIMARY KEY
                if col_name.lower() == 'id':
                    col_definition += ' PRIMARY KEY' # Add PRIMARY KEY constraint
                
                columns_with_types.append(col_definition)

            # Join all column definitions to form the CREATE TABLE statement
            create_table_sql = f'CREATE TABLE IF NOT EXISTS "{table_name}" ({", ".join(columns_with_types)})'

            cursor.execute(create_table_sql)
            print(f"Tabelle '{table_name}' in Datenbank '{db_file_path}' erstellt/geprüft.")
            conn.commit()

            # --- Insert Data ---
            # Convert DataFrame to a list of tuples for insertion
            data_to_insert = df.where(pd.notnull(df), None).values.tolist()

            # Prepare the INSERT statement
            column_names_quoted = [f'"{col}"' for col in df.columns]
            columns_str_for_sql = ", ".join(column_names_quoted)
            placeholders = ', '.join(['?' for _ in df.columns])

            insert_sql = f'INSERT INTO "{table_name}" ({columns_str_for_sql}) VALUES ({placeholders})'

            # Execute inserts in batches for performance
            cursor.executemany(insert_sql, data_to_insert)
            conn.commit()
            print(f"{len(data_to_insert)} Zeilen erfolgreich in Tabelle '{table_name}' eingefügt.")

    except pd.errors.EmptyDataError:
        print(f"Fehler: CSV-Datei '{csv_file_path}' ist leer.")
    except FileNotFoundError:
        print(f"Fehler: CSV-Datei '{csv_file_path}' nicht gefunden.")
    except Exception as e:
        print(f"Ein Fehler ist aufgetreten: {e}")

# --- Hauptausführung ---
if __name__ == "__main__":
    # Konfiguriere deine Dateipfade und Tabellennamen
    csv_datei = 'DataNextNova(Sheet1).csv' # Name deiner CSV-Datei (angepasst)
    sqlite_datenbank = 'my_database.db' # Name deiner SQLite-Datenbank
    ziel_tabelle = 'tblDrones' # Name der Tabelle, die erstellt oder befüllt wird

    print(f"Starte Import von '{csv_datei}' nach '{sqlite_datenbank}' in Tabelle '{ziel_tabelle}'...")
    import_csv_to_sqlite(csv_datei, sqlite_datenbank, ziel_tabelle)
    print("\nImport abgeschlossen.")

    # Optional: Überprüfe die Daten direkt im Skript
    try:
        with sqlite3.connect(sqlite_datenbank) as conn:
            cursor = conn.cursor()
            cursor.execute(f'SELECT * FROM "{ziel_tabelle}" LIMIT 5') # Zeige die ersten 5 Zeilen
            print(f"\nErste 5 Zeilen der Tabelle '{ziel_tabelle}':")
            for row in cursor.fetchall():
                print(row)
    except Exception as e:
        print(f"Fehler beim Überprüfen der Daten: {e}")