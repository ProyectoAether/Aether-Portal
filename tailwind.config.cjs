//** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		container: {
			center: true
		},
		extend: {}
	},

	plugins: [require('daisyui')],
    daisyui: {
        themes: ["light", "dracula"]
    },
	darkMode: 'class'
};
module.exports = config;
