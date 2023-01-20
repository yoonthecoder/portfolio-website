/** @type {import('tailwindcss').Config} */
const {fontFamily} = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      yellow:'#EAA703'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-figtree)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
