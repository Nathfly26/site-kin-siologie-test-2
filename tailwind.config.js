/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f4',
          100: '#e3e7dd',
          200: '#c5ceb8',
          300: '#a3b18f',
          400: '#859c6c',
          500: '#6b8251',
          600: '#54673f',
          700: '#435234',
          800: '#374329',
          900: '#2f3923',
        },
      },
    },
  },
  plugins: [],
}