/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('/kvimg.webp')",
			},
		},
	},
	darkMode: "class",
	plugins: [require("daisyui")],
};
