// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindScrollbar = require("tailwind-scrollbar")({ nocompatible: true });

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,md,mdx,ts,tsx}",
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		extend: {
			colors: {
				accentAlt: "#271d3b"
			}
		}
	},
	daisyui: {
		themes: [
			{
				shiftcode: {
					primary: "#d9d9d9",
					secondary: "#33c094",
					accent: "#8b5cf6",
					neutral: "#110E0E",
					"base-100": "#171212",
					info: "#3ABFF8",
					success: "#36D399",
					warning: "#FBBD23",
					error: "#F87272"
				}
			}
		]
	},
	plugins: [require("daisyui"), tailwindScrollbar]
};
