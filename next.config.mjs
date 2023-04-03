/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	swcMinify: true,
	// compiler: {
	// 	removeConsole: true
	// },
	compress: true,
	experimental: {
		appDir: true
	}
};
export default config;
