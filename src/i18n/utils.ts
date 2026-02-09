import { ui, defaultLang, type Lang } from "./ui";

/**
 * Derive the current language from the URL pathname.
 * English lives at root (/about/), French at /fr/about/.
 */
export function getLangFromUrl(url: URL): Lang {
	const [, maybeLang] = url.pathname.split("/");
	if (maybeLang in ui) return maybeLang as Lang;
	return defaultLang;
}

/**
 * Return a translation helper bound to a given language.
 */
export function useTranslations(lang: Lang) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
		return (ui[lang]?.[key] ?? ui[defaultLang][key]) as string;
	};
}

/**
 * Return a URL path localised for the given language.
 * English paths stay at root; French paths get /fr/ prefix.
 */
export function localePath(path: string, lang: Lang): string {
	if (lang === "en") return path;
	return `/fr${path === "/" ? "/" : path}`;
}

/**
 * Given the current pathname, return the equivalent path in the other language.
 */
export function switchLangPath(pathname: string, currentLang: Lang): string {
	if (currentLang === "fr") {
		// Strip /fr prefix → go to English
		const stripped = pathname.replace(/^\/fr/, "") || "/";
		return stripped;
	}
	// Add /fr prefix → go to French
	return `/fr${pathname === "/" ? "/" : pathname}`;
}
