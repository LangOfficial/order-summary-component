/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e0e8ff',
          700: '#3829e0',
        },
        neutral: {
          100: 'hsl(225, 100%, 98%)',
          500: 'hsl(224, 23%, 55%)',
          800: 'hsl(223, 47%, 23%)'
        }
      },
    },
  },
  plugins: [],
}

