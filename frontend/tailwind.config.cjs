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
		themes: [
			{
				aether: {
					primary: '#201d7f',
					secondary: '#FF4B36',
					accent: '#37CDBE',
					neutral: '#686c81',
					'base-100': '#FFFFFF',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			}
		]
	},
	darkMode: 'class'
};
module.exports = config;
