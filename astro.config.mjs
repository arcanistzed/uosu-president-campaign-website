// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const hiddenPaths = ["/platform", "/about", "/vote"];

// https://astro.build/config
export default defineConfig({
	site: "https://vote.danielthorp.com",
	integrations: [
		sitemap({
			filter: page => {
				const pathname = new URL(page).pathname.replace(
					/index\.html$/,
					"",
				);
				return !hiddenPaths.some(
					path => pathname === path || pathname === `${path}/`,
				);
			},
		}),
	],
	i18n: {
		defaultLocale: "en",
		locales: ["en", "fr"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
