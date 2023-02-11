/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
	defaultNamespace: "common",
	namespaces: ["common", "pages", "errors"],
	defaultLocale: "en",
	locales: [
		"en", // The `defaultLocale` value must present in `locales` keys
		"de",
		"fr",
		"es",
		"nl"
	]
};
