import sqlite3
import os

# Define the database file name
DB_FILE = 'NextNova.db'

# --- 1. Connect to the database ---
# If the database file doesn't exist, it will be created.
# Using 'with' statement ensures the connection is properly closed.
try:
    with sqlite3.connect(DB_FILE) as conn:
        cursor = conn.cursor() # A cursor object to execute SQL commands

        print(f"Connected to SQLite database: {DB_FILE}")

        # --- 2. Create a table ---
        # Using IF NOT EXISTS prevents errors if the table already exists
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                age INTEGER,
                email TEXT UNIQUE
            )
        ''')
        print("Table 'users' checked/created successfully.")
        conn.commit() # Save the table creation

        # --- 3. Insert data ---
        # Using parameterized queries to prevent SQL injection (ALWAYS use this!)
        try:
            cursor.execute("INSERT INTO users (name, age, email) VALUES (?, ?, ?)", ('Alice', 30, 'alice@example.com'))
            cursor.execute("INSERT INTO users (name, age, email) VALUES (?, ?, ?)", ('Bob', 24, 'bob@example.com'))
            cursor.execute("INSERT INTO users (name, age, email) VALUES (?, ?, ?)", ('Charlie', 35, 'charlie@example.com'))
            print("Data inserted successfully.")
            conn.commit() # Save the inserted data
        except sqlite3.IntegrityError as e:
            print(f"Error inserting data (possibly duplicate email): {e}")
            # Rollback if there was an error during insertion to undo partial changes
            conn.rollback()

        # --- 4. Query data ---
        print("\n--- All Users ---")
        cursor.execute("SELECT id, name, age, email FROM users")
        rows = cursor.fetchall() # Fetch all results

        if rows:
            for row in rows:
                print(f"ID: {row[0]}, Name: {row[1]}, Age: {row[2]}, Email: {row[3]}")
        else:
            print("No users found.")

        print("\n--- Users older than 25 ---")
        cursor.execute("SELECT name, age FROM users WHERE age > ?", (25,))
        older_users = cursor.fetchall()

        if older_users:
            for user in older_users:
                print(f"Name: {user[0]}, Age: {user[1]}")
        else:
            print("No users older than 25 found.")

        # --- 5. Update data ---
        cursor.execute("UPDATE users SET age = ? WHERE name = ?", (31, 'Alice'))
        print("\nUpdated Alice's age.")
        conn.commit()

        # --- 6. Delete data ---
        cursor.execute("DELETE FROM users WHERE name = ?", ('Bob',))
        print("Deleted Bob from users.")
        conn.commit()

        print("\n--- Users after update and delete ---")
        cursor.execute("SELECT id, name, age, email FROM users")
        final_rows = cursor.fetchall()
        if final_rows:
            for row in final_rows:
                print(f"ID: {row[0]}, Name: {row[1]}, Age: {row[2]}, Email: {row[3]}")
        else:
            print("No users found.")

except sqlite3.Error as e:
    print(f"An SQLite error occurred: {e}")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
finally:
    # This block ensures that if a connection was opened outside the 'with' statement,
    # it would be closed. With the 'with' statement, it's mostly for robustness.
    if 'conn' in locals() and conn:
        # The 'with' statement handles closing, but explicit close is good for understanding.
        # conn.close()
        print("Database connection closed (handled by 'with' statement).")

# Optional: Clean up the database file after execution for testing purposes
# If you want to keep the database file, comment out the following lines
# if os.path.exists(DB_FILE):
#    os.remove(DB_FILE)
#    print(f"Cleaned up: {DB_FILE} removed.")