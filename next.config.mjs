// @ts-check

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		removeConsole: true
	},
	compress: true,
	experimental: {
		appDir: true,
		typedRoutes: true
	}
};
export default config;
