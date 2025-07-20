/**** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0F1A3A',
          light: '#00F5FF',
        },
        accent: {
          silver: '#C0C0C0',
          white: '#FFFFFF',
        }
      }
    },
  },
  plugins: [],
}