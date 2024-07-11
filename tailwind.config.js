/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"./**/*.{html, jsx, js}",
		"./restaurant/**/*.{html,jsx, js}",
		"./restaurant/**/*.js",
		"./restaurant/**/*.html",
	
		// "*.{html,jsx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#BE3345"
			}
		},
	},
	plugins: [],
}

