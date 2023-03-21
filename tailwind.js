/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: 'class',
	content: ['./app/**/*.{hbs,js}'],
	theme: {
		extend: {
			colors: {
				gray: colors.neutral,
			},
		},
	},
	plugins: [],
};
