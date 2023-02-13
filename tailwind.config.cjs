/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
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
					secondary: "#4ade80",
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
	plugins: [
		require("daisyui"),
		require("tailwind-scrollbar")({ nocompatible: true })
	]
};
