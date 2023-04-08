/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	swcMinify: true,
	compress: true,
	experimental: {
		appDir: true,
		typedRoutes: true
	}
	//output: "export",
	// images: { unoptimized: true }
	// compiler: {
	// 	removeConsole: true
	// },
};
export default config;
