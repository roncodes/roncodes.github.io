const colors = require('tailwindcss/colors');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProduction = EmberApp.env() === 'production';

module.exports = {
	content: ['./app/**/*.{hbs,js}'],
	purge: {
		enable: isProduction,
		mode: 'all',
		content: [
			'./app/index.html',
			'./app/templates/**/*.hbs',
			'./app/components/**/*.hbs',
		],
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		colors: {
			transparent: 'transparent',
			black: colors.black,
			gray: colors.neutral,
			white: colors.white,
			blue: colors.blue,
			green: colors.emerald,
			indigo: colors.indigo,
			red: colors.red,
			yellow: colors.yellow,
			orange: colors.orange,
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
