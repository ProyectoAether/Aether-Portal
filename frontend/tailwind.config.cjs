//** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true
		},
		extend: {}
	},

	plugins: [
		require('daisyui'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography')
	],
	daisyui: {
		themes: ['light']
	},
	darkMode: 'class'
};
module.exports = config;
