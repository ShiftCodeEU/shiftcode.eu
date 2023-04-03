/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	swcMinify: true,
	compress: true,
	experimental: {
		appDir: true,
	},
	// output: "export"
	// compiler: {
	// 	removeConsole: true
	// },
};
export default config;
