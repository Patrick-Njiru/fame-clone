/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"custom-orange": "#FF7F04",
			},
		},
	},
	plugins: [],
}
