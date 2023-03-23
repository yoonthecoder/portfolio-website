/** @type {import('tailwindcss').Config} */
const {fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        source: ["Source Sans Pro", "sans-serif"],
        drukwide: ["Druk Wide Bold", 'sans-serif'],
        felidae: ["Felidae", "cursive"]
      },
      colors: {
        white:'#fff',
        black:"#3F3F3F",
        red:'#FF514E',
        yellow:'#EAA703',
        green:'#0AC046',
        gray: '#646464',
        lightblack:"#555555",
        lightgray:'#EEEEEE',
        'background-gray':'#FAFAFA',
      },
    },
  },
  plugins: [],
}
