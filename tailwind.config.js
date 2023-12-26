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
					"linear-gradient(13deg, #E9E9EB 10%, #E9E9EB 30%,#E9E9EB 10%,  rgba(229, 231, 235, 0.00) 90%)",
			},
			colors: {
				grayText: "#71717a",
			},
			grayscale: {
				50: "50%",
			},
		},
	},
	plugins: [require("daisyui")],
};
