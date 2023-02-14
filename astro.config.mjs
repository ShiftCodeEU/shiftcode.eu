import { defineConfig } from "astro/config";
import "module-alias/register";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://github.com/yassinedoghri/astro-i18next
import astroI18next from "astro-i18next";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
	site: "https://shiftcode.eu",
	integrations: [
		astroI18next(),
		prefetch({
			// Allow up to four links to be prefetched concurrently
			throttle: 4
			// Only prefetch links with an href that begins with `/projects`
			// selector: "a[href^='/projects']"
		}),
		sitemap({
			// Filter in/out specific pages in project to be added to/not to the sitemap
			// filter: (page) => page !== "https://shiftcode.eu/page-path-here",
			// Entrylimit of pages amount in the sitemap
			// entryLimit: 10000,
			changefreq: "always",
			priority: 0.7,
			lastmod: new Date(),
			// External page inclusions by url
			// customPages: ['https://shiftcode.eu/external-page', 'https://shiftcode.eu/external-page2']
			// Locatization
			i18n: {
				/*
				 *	All urls that don't contain `es` or `fr` after `https://shiftcode.eu/`
				 *	will be treated as default locale, i.e. `en`
				 */
				defaultLocale: "en",
				locales: {
					// The `defaultLocale` value must present in `locales` keys
					"en-US": "en-US",
					"de-DE": "de-DE",
					"fr-FR": "fr-FR",
					"es-ES": "es-ES",
					"nl-NL": "nl-NL"
				}
			}
		}),
		tailwind({
			config: {
				path: "./tailwind.config.cjs",
				applyBaseStyles: false
			}
		}),
		react()
	]
});
