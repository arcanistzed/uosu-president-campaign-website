import { ui, defaultLang, type Lang } from "./ui";

function getValueByPath(obj: unknown, path: string): unknown {
	return path.split(".").reduce<unknown>((current, segment) => {
		if (current && typeof current === "object" && segment in current) {
			return (current as Record<string, unknown>)[segment];
		}
		return undefined;
	}, obj);
}

function interpolate(template: string, vars?: Record<string, string | number>): string {
	if (!vars) return template;
	return template.replace(/\{(\w+)\}/g, (_, key) => {
		const value = vars[key];
		return value === undefined ? `{${key}}` : String(value);
	});
}

/**
 * Derive the current language from URL pathname.
 * English lives at root (/about/), French at /fr/about/.
 */
export function getLangFromUrl(url: URL): Lang {
	const [, maybeLang] = url.pathname.split("/");
	if (maybeLang in ui) return maybeLang as Lang;

	const queryLang = url.searchParams.get("lang");
	if (queryLang === "en" || queryLang === "fr") return queryLang;

	return defaultLang;
}

/**
 * Return a translation helper bound to a given language.
 */
export function useTranslations(lang: Lang) {
	return function t<T = string>(
		key: string,
		vars?: Record<string, string | number>,
	): T {
		const value =
			getValueByPath(ui[lang], key) ?? getValueByPath(ui[defaultLang], key);

		if (typeof value === "string") {
			return interpolate(value, vars) as T;
		}

		return value as T;
	};
}

/**
 * Return a URL path localised for the given language.
 * English paths stay at root; French paths get /fr/ prefix.
 */
export function localePath(path: string, lang: Lang): string {
	if (lang === "en") return path;
	if (path === "/fr" || path.startsWith("/fr/")) return path;
	return `/fr${path === "/" ? "/" : path}`;
}

/**
 * Given the current pathname, return the equivalent path in the other language.
 */
export function switchLangPath(pathname: string, currentLang: Lang): string {
	if (currentLang === "fr") {
		const stripped = pathname.replace(/^\/fr/, "") || "/";
		return stripped;
	}
	return `/fr${pathname === "/" ? "/" : pathname}`;
}
