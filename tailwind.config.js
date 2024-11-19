/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sfpro: ['SF Pro', 'sans-serif'],
				figtree: ['Figtree', 'sans-serif'],
				source: ['Source Sans Pro', 'sans-serif'],
				drukwide: ['Druk Wide Bold', 'sans-serif'],
				felidae: ['Felidae', 'cursive'],
			},
			colors: {
				white: '#fff',
				black: '#3F3F3F',
				red: '#FF514E',
				yellow: '#EAA703',
				green: '#0AC046',
				gray: '#646464',
				lightblack: '#555555',
				lightgray: '#EEEEEE',
				'navbar-dark': '#1E1E1E',
				'navbar-darkgray': '#3A3A3A',
				'background-gray': '#FAFAFA',
				'background-dark': '#2F2F2F',
			},
		},
	},
	plugins: [],
};
