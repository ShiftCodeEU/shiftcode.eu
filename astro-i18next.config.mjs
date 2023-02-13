/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
	defaultNamespace: "common",
	namespaces: ["common", "pages", "errors"],
	defaultLocale: "en-US",
	locales: [
		"en-US", // The `defaultLocale` value must present in `locales` keys
		"de-DE",
		"fr-FR",
		"es-ES",
		"nl-NL"
	]
};
