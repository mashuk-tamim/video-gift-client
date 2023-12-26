/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: "Inter, sans-serif",
			},
			backgroundImage: {
				"banner-gradient":
					"linear-gradient(61deg, #E9E9EB 38.45%, rgba(229, 231, 235, 0.00) 78.48%)",
			},
			colors: {
				grayText: "#71717a",
			},
		},
	},
	plugins: [require("daisyui")],
};
