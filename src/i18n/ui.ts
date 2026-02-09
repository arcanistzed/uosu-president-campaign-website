/**
 * Shared UI translations — vote.danielthorp.com
 *
 * Page-specific content lives directly in each page file.
 * This file covers navigation, buttons, banner, footer,
 * and other strings reused across components.
 */

export const languages = {
	en: "English",
	fr: "Français",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const ui = {
	en: {
		// Navigation
		"nav.home": "Home",
		"nav.platform": "Platform",
		"nav.about": "About",
		"nav.vote": "How to Vote",
		"nav.getInvolved": "Get Involved",
		"nav.faq": "FAQ",

		// Site branding
		"site.name": "Daniel Thorp",
		"site.tagline": "for UOSU President",

		// Vote banner
		"banner.text": "Voting is March 2–6, 2026",
		"banner.cta": "Make your voice heard.",
		"banner.link": "How to Vote →",

		// Footer
		"footer.copyright": "Daniel Thorp. Campaign for UOSU President.",

		// Common buttons
		"btn.readPlatform": "Read the Platform",
		"btn.aboutDaniel": "About Daniel",
		"btn.howToVote": "How to Vote →",
		"btn.fullPlatform": "Full Platform →",
		"btn.backHome": "← Back to Home",
		"btn.getInTouch": "Get in Touch →",
		"btn.volunteer": "Sign Up to Volunteer →",

		// Countdown
		"countdown.label": "Voting opens in",
		"countdown.open": "Voting is open!",
		"countdown.closed": "Voting has closed",
		"countdown.days": "days",
		"countdown.hours": "hours",
		"countdown.minutes": "minutes",
		"countdown.seconds": "seconds",

		// Language switcher
		"lang.switch": "Français",
	},
	fr: {
		// Navigation
		"nav.home": "Accueil",
		"nav.platform": "Plateforme",
		"nav.about": "À propos",
		"nav.vote": "Comment voter",
		"nav.getInvolved": "S'impliquer",
		"nav.faq": "FAQ",

		// Site branding
		"site.name": "Daniel Thorp",
		"site.tagline": "pour la présidence du SÉUO",

		// Vote banner
		"banner.text": "Le vote est du 2 au 6 mars 2026",
		"banner.cta": "Faites entendre votre voix.",
		"banner.link": "Comment voter →",

		// Footer
		"footer.copyright":
			"Daniel Thorp. Campagne pour la présidence du SÉUO.",

		// Common buttons
		"btn.readPlatform": "Lire la plateforme",
		"btn.aboutDaniel": "À propos de Daniel",
		"btn.howToVote": "Comment voter →",
		"btn.fullPlatform": "Plateforme complète →",
		"btn.backHome": "← Retour à l'accueil",
		"btn.getInTouch": "Nous contacter →",
		"btn.volunteer": "S'inscrire comme bénévole →",

		// Countdown
		"countdown.label": "Le vote ouvre dans",
		"countdown.open": "Le vote est ouvert !",
		"countdown.closed": "Le vote est terminé",
		"countdown.days": "jours",
		"countdown.hours": "heures",
		"countdown.minutes": "minutes",
		"countdown.seconds": "secondes",

		// Language switcher
		"lang.switch": "English",
	},
} as const;
