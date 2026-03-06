export const languages = {
	en: "English",
	fr: "Français",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const ui = {
	en: {
		nav: {
			home: "Home",
			platform: "Platform",
			about: "About",
			vote: "How to Vote",
			getInvolved: "Get Involved",
			faq: "FAQ",
		},
		site: {
			name: "Daniel Thorp",
			tagline: "for UOSU President",
		},
		banner: {
			text: "Voting is March 2-6, 2026",
			cta: "Make your voice heard.",
			link: "How to Vote ->",
			aria: "Election voting reminder",
		},
		footer: {
			copyright: "Daniel Thorp",
			instagram: "Instagram",
			faq: "FAQ",
		},
		buttons: {
			readPlatform: "Read the Platform",
			aboutDaniel: "About Daniel",
			howToVote: "How to Vote ->",
			fullPlatform: "Full Platform ->",
			backHome: "<- Back to Home",
			getInTouch: "Get in Touch ->",
			volunteer: "Sign Up to Volunteer ->",
			suggestIdea: "Suggest an Idea ->",
			askQuestion: "Ask a Question ->",
		},
		countdown: {
			label: "Voting opens in",
			open: "Voting is open!",
			closed: "Voting has closed",
			days: "days",
			hours: "hours",
			minutes: "minutes",
			seconds: "seconds",
		},
		lang: {
			switch: "Français",
			switchTo: "Switch to {language}",
		},
		layout: {
			defaultTitle: "Vote Daniel Thorp - UOSU President",
			defaultDescription:
				"Daniel Thorp is running for President of the University of Ottawa Students' Union. Learn about his platform and vision for students.",
			titleSuffix: "Vote Daniel Thorp",
			author: "Daniel Thorp",
			ogSiteName: "Vote Daniel Thorp",
			skipToContent: "Skip to content",
		},
		header: {
			navAria: "Main navigation",
			homeAria: "Vote Daniel Thorp - Home",
			menuAria: "Menu",
		},
		pages: {
			notFound: {
				title: "Page Not Found",
				description: "This page doesn't exist.",
				heading: "404",
				body: "This page doesn't exist.",
			},
			index: {
				heroAria: "Campaign introduction",
				heroLabel: "Candidate for UOSU President",
				heroTagline: "A Union that Works for All.",
				platformHeading: "Platform Priorities",
				platformLead:
					"These are the commitments that will guide my presidency. Each one is specific, measurable, and achievable within a single term.",
				countdownAria: "Election countdown",
				countdownSr:
					"Voting opens March 2, 2026 and closes March 6, 2026.",
				noscriptCountdown:
					"Voting opens March 2, 2026 and closes March 6, 2026.",
				whyHeading: "Why I'm Running",
				whyBody:
					"Students are facing a cost-of-living crisis. Rent is rising. Tuition keeps increasing. Government grants are shrinking. And yet, the student union too often reacts after decisions are already made — playing defense instead of shaping the outcome. I'm running to change that. To build a real advocacy engine inside UOSU. To manage student money responsibly and transparently. To deliver the services students voted for. To end the isolationism that limits our leverage. And to govern openly, with students actually in the room.",
			},
			getInvolved: {
				title: "Get Involved",
				description:
					"Support Daniel Thorp's campaign for UOSU President. Volunteer, connect on social media, or get in touch.",
				heading: "Get Involved",
				lead: "This campaign is about students showing up for students. Here's how you can help.",
				cards: [
					{
						icon: "📣",
						title: "Spread the Word",
						body: "Tell your friends, classmates, and group chats. Share the website. The most effective campaign tool is a personal recommendation from someone they trust.",
					},
					{
						icon: "🤝",
						title: "Volunteer",
						body: "Want to help with campaigning, tabling, or outreach? Reach out! Every bit of support makes a difference.",
						cta: "Sign Up to Volunteer ->",
					},
					{
						icon: "🗳️",
						title: "Vote March 2-6",
						body: "The single most important thing you can do. It takes a few minutes and it matters.",
						cta: "How to Vote ->",
					},
				],
				contactHeading: "Get in Touch",
				contacts: [
					{ label: "Email", value: "vote@danielthorp.com" },
					{ label: "Instagram", value: "@daniel.thorp.seuo.uosu" },
					{ label: "Website", value: "danielthorp.com" },
				],
			},
			vote: {
				title: "How to Vote",
				description:
					"Learn when, where, and how to vote in the 2026 UOSU General Election. Voting is March 2-6.",
				heading: "How to Vote",
				lead: "Voting is open March 2-6, 2026. There are three ways to cast your ballot:",
				methods: [
					{
						icon: "🖥️",
						title: "Online",
						body: "A secure voting portal will be available on the UOSU website starting March 2nd. Log in with your uOttawa Microsoft account to be redirected to your ballot.",
						note: "This portal was built by Daniel when he was UOSU Communications Commissioner in 2024 and has been used for multiple elections since.",
					},
					{
						icon: "📧",
						title: "Email",
						body: "You will receive an email with a unique ballot link on March 2nd. Check your uOttawa student email, and your spam/junk folder.",
						note: "The email will come from the election provider. If you don't see it by end of day March 2nd, check your spam folder or contact the UOSU Elections Office at elections@seuo-uosu.ca.",
					},
					{
						icon: "🏢",
						title: "In-Person",
						body: "Vote in front of the UOSU office. Bring your student ID.",
						note: "Specific hours will be announced soon.",
					},
				],
				eligibilityHeading: "Who Can Vote?",
				eligibilityText: [
					"All undergraduate students at the University of Ottawa who are members of the UOSU are eligible to vote in the presidential election.",
					"To be eligible to vote, you must be enrolled in at least one course for the Winter semester or be on a co-op work term.",
				],
				ctaLead: "Have questions about voting?",
			},
			platform: {
				title: "Platform",
				description:
					"Daniel Thorp's platform for UOSU President: transparency, real representation, and better student services.",
				heading: "Platform",
				lead: "Real transparency. Real accountability. Real results for students.",
				suggestAria: "Suggest a platform idea",
				suggestHeading: "Have a platform idea?",
				suggestBody:
					"This platform is for students. If there's something missing, I want to hear about it.",
				backTopAria: "Back to top",
			},
			faq: {
				title: "FAQ",
				description:
					"Frequently asked questions about Daniel Thorp's campaign for UOSU President, the election process, and how to get involved.",
				heading: "Frequently Asked Questions",
				lead: "Quick answers about the campaign, the election, and the role of UOSU President.",
				items: [
					{
						question: "What does the UOSU President actually do?",
						answer: "The President is the chief executive and spokesperson of the University of Ottawa Students' Union, representing over 40,000 undergraduate students. They chair the Executive Committee, oversee day-to-day union operations, manage staff, represent students to the university administration and external stakeholders, and are accountable to the elected Board of Directors. It's part advocacy, part governance, part operations.",
					},
					{
						question: "How do I vote?",
						answer: "Vote online at vote.seuo-uosu.com. You can also vote in person at the UOSU office with your student ID.",
					},
					{
						question: "Who can vote in this election?",
						answer: "All undergraduate students at the University of Ottawa who are members of the UOSU are eligible to vote in the presidential election. To be eligible to vote, you must be enrolled in at least one course for the Winter semester or be on a co-op work term.",
					},
				],
				askHeading: "Have another question?",
				askBody: "Send it over and it may be added to this page.",
			},
			about: {
				title: "About Daniel",
				description:
					"Learn about Daniel Thorp - his experience in student governance, campus leadership, and why he's running for UOSU President.",
				heading: "About Daniel",
				lead: "Bilingual Software Engineering (CO-OP) student at the University of Ottawa.",
				sections: [
					{
						id: "uosu",
						icon: "🏛️",
						title: "UOSU Experience",
						intro: "I've served the Students' Union as both an elected Board Director and an Executive.",
						roles: [
							{
								title: "Communications Commissioner",
								period: "Nov 2023 - Apr 2024",
								points: [
									"Directed multi-channel communications for 40,000+ students across social media, newsletters, website, and physical outreach",
									"Led the 2024 General Elections: introduced in-person voting, resolved email delivery issues with University IT, and built a real-time turnout tracker",
									"Designed and deployed the election voting portal (Next.js + Microsoft Entra ID + ElectionBuddy) that's still in use today",
									"Chaired the hiring of UOSU's first Ombudsperson and drafted the Workplace Violence Prevention Policy",
									"Authored policy on union advocacy statements and ran public consultations and town halls",
									"Coordinated with Student Affairs, University IT, and Facilities to align communications and operations",
									"Conducted accessibility reviews with the Centre for Students with Disabilities",
								],
							},
							{
								title: "Information Technology Consultant",
								period: "Jun - Aug 2024",
								points: [
									"Administered Microsoft 365 and maintained the UOSU website for accurate student-facing information",
									"Recruited and onboarded IT and Web staff, including job descriptions, interviews, and hiring recommendations",
								],
							},
							{
								title: "Engineering Director",
								period: "May - Aug 2023",
								points: [
									"Elected to represent engineering students on the UOSU Board of Directors (~40,000 members)",
									"Led policy and bylaw reforms adopted by the Board and chaired an ad hoc committee",
									"Received corporate governance and fiduciary duty training from external legal counsel",
								],
							},
						],
					},
					{
						id: "governance",
						icon: "⚖️",
						title: "Campus Governance",
						intro: "I've chaired boards, drafted policy, and helped allocate money.",
						roles: [
							{
								title: "VP Internal - Engineering Students' Society",
								period: "May - Sep 2025",
								points: [
									"Oversaw governance and compliance of ESS sub-associations",
									"Advocated to Faculty leadership on student issues including space, student experience, and institutional decision-making",
								],
							},
							{
								title: "Chair of the Board - Engineering Students' Society",
								period: "May 2024 - Apr 2025",
								points: [
									"Presided over board meetings using Robert's Rules of Order, ensuring procedural clarity",
									"Led governance modernization - improved meeting process, documentation, and compliance expectations",
									"Created the Society's first centralized executive accountability tracking system",
								],
							},
							{
								title: "Chair of the Board - Canadian Federation of Engineering Students",
								period: "May - Aug 2024",
								points: [
									"Chaired a national board, ensuring compliance with organizational policies and governing documents",
									"Organized CFES's first Online Seasonal Updates Meeting and created bilingual agenda templates",
								],
							},
							{
								title: "Committee Member - Engineering Endowment Fund",
								period: "May 2023 - Winter 2025",
								points: [
									"40+ hours of deliberation evaluating proposals and budgets for student engineering initiatives",
									"Helped allocate over $400,000 to academic, technical, and student-run initiatives",
								],
							},
						],
					},
					{
						id: "community",
						icon: "🌍",
						title: "Community & Nonprofit Leadership",
						roles: [
							{
								title: "Capital Technology Network / Hack the Hill",
								period: "Nov 2022 - Present",
								summary:
									"Led the incorporation of a youth tech nonprofit. Planned and executed Hack the Hill II - 826 participants, 113 projects, and over $95,000 in sponsorship. Currently serving as Chair of the Board.",
							},
							{
								title: "Board Member - OpenMedia",
								period: "Sep 2025 - Present",
								summary:
									"Governance, financial oversight, and HR for a national nonprofit advocating for digital rights, privacy, and an open internet.",
							},
							{
								title: "President & Co-Founder - uOttawa Legal Hackers",
								period: "Oct 2024 - Present",
								summary:
									"Founded a student organization at the intersection of law, technology, and public policy. Organized events on digital rights, AI, and emerging policy issues.",
							},
							{
								title: "Writer - Student Affairs, University of Ottawa",
								period: "Jan 2026 - Present",
								summary:
									"Contributes to the uOttawa student newsletter and maintains student-facing web content on Drupal.",
							},
						],
					},
					{
						id: "education",
						icon: "🎓",
						title: "Education",
						roles: [
							{
								title: "University of Ottawa",
								period: "Sep 2022 - Apr 2027 (expected)",
								summary:
									"Bachelor of Applied Science, Software Engineering (CO-OP). Bilingual (English/French).",
							},
						],
					},
				],
			},
		},
	},
	fr: {
		nav: {
			home: "Accueil",
			platform: "Plateforme",
			about: "A propos",
			vote: "Comment voter",
			getInvolved: "S'impliquer",
			faq: "FAQ",
		},
		site: {
			name: "Daniel Thorp",
			tagline: "à la presidence du SÉUO",
		},
		banner: {
			text: "Le vote est du 2 au 6 mars 2026",
			cta: "Faites entendre votre voix.",
			link: "Comment voter ->",
			aria: "Rappel de vote",
		},
		footer: {
			copyright: "Daniel Thorp",
			instagram: "Instagram",
			faq: "FAQ",
		},
		buttons: {
			readPlatform: "Lire la plateforme",
			aboutDaniel: "A propos de Daniel",
			howToVote: "Comment voter ->",
			fullPlatform: "Plateforme complete ->",
			backHome: "<- Retour a l'accueil",
			getInTouch: "Nous contacter ->",
			volunteer: "S'inscrire comme benevole ->",
			suggestIdea: "Proposer une idee ->",
			askQuestion: "Poser une question ->",
		},
		countdown: {
			label: "Le vote ouvre dans",
			open: "Le vote est ouvert!",
			closed: "Le vote est termine",
			days: "jours",
			hours: "heures",
			minutes: "minutes",
			seconds: "secondes",
		},
		lang: {
			switch: "English",
			switchTo: "Passer en {language}",
		},
		layout: {
			defaultTitle: "Votez Daniel Thorp - Presidence du SÉUO",
			defaultDescription:
				"Daniel Thorp se presente à la presidence du Syndicat étudiant de l'Universite d'Ottawa. Decouvrez sa plateforme et sa vision pour les étudiant·e·s.",
			titleSuffix: "Vote Daniel Thorp",
			author: "Daniel Thorp",
			ogSiteName: "Vote Daniel Thorp",
			skipToContent: "Aller au contenu",
		},
		header: {
			navAria: "Navigation principale",
			homeAria: "Vote Daniel Thorp - Accueil",
			menuAria: "Menu",
		},
		pages: {
			notFound: {
				title: "Page introuvable",
				description: "Cette page n'existe pas.",
				heading: "404",
				body: "Cette page n'existe pas.",
			},
			index: {
				heroAria: "Presentation de la campagne",
				heroLabel: "Candidat à la présidence du SÉUO",
				heroTagline: "Un syndicat qui fonctionne pour tous.",
				platformHeading: "Priorites de la plateforme",
				platformLead:
					"Voici les engagements qui guideront ma présidence. Chaque engagement est precis, mesurable et realisable pendant un seul mandat.",
				countdownAria: "Compte a rebours electoral",
				countdownSr:
					"Le vote ouvre le 2 mars 2026 et se termine le 6 mars 2026.",
				noscriptCountdown:
					"Le vote ouvre le 2 mars 2026 et se termine le 6 mars 2026.",
				whyHeading: "Pourquoi je me presente",
				whyBody:
					"Les etudiant·e·s font face à une crise du coût de la vie. Les loyers augmentent. Les frais de scolarité continuent de grimper. Les subventions gouvernementales diminuent. Et pourtant, le syndicat etudiant réagit trop souvent après que les décisions ont déjà été prises. Je me presente pour changer cela : bâtir un véritable moteur de représentation au sein du SÉUO, gérer les fonds etudiants de manière responsable et transparente, et gouverner ouvertement, avec les etudiant·e·s vraiment dans la salle.",
			},
			getInvolved: {
				title: "S'impliquer",
				description:
					"Soutenez la campagne de Daniel Thorp à la présidence du SÉUO. Faites du benevolat, connectez-vous sur les reseaux sociaux ou contactez-nous.",
				heading: "S'impliquer",
				lead: "Cette campagne repose sur des etudiant·e·s qui se mobilisent pour des etudiant·e·s. Voici comment vous pouvez aider.",
				cards: [
					{
						icon: "📣",
						title: "Passez le mot",
						body: "Parlez-en a vos amis, camarades et groupes de discussion. Partagez le site web. L'outil de campagne le plus efficace reste la recommandation personnelle.",
					},
					{
						icon: "🤝",
						title: "Faire du benevolat",
						body: "Vous voulez aider a la campagne, aux kiosques ou a la mobilisation? Ecrivez-nous. Chaque soutien compte.",
						cta: "S'inscrire comme benevole ->",
					},
					{
						icon: "🗳️",
						title: "Votez du 2 au 6 mars",
						body: "C'est la chose la plus importante que vous pouvez faire. Cela prend quelques minutes et cela compte.",
						cta: "Comment voter ->",
					},
				],
				contactHeading: "Nous joindre",
				contacts: [
					{ label: "Courriel", value: "vote@danielthorp.com" },
					{ label: "Instagram", value: "@daniel.thorp.seuo.uosu" },
					{ label: "Site web", value: "danielthorp.com" },
				],
			},
			vote: {
				title: "Comment voter",
				description:
					"Apprenez quand, ou et comment voter a l'élection générale du SÉUO de 2026. Le vote est du 2 au 6 mars.",
				heading: "Comment voter",
				lead: "Le vote est ouvert du 2 au 6 mars 2026. Il y a trois facons de voter:",
				methods: [
					{
						icon: "🖥️",
						title: "En ligne",
						body: "Un portail de vote securise sera disponible sur le site du SÉUO a partir du 2 mars. Connectez-vous avec votre compte Microsoft uOttawa pour acceder a votre bulletin.",
						note: "Ce portail a ete construit par Daniel lorsqu'il etait commissaire aux communications du SÉUO en 2024 et il est utilise depuis dans plusieurs élections.",
					},
					{
						icon: "📧",
						title: "Par courriel",
						body: "Vous recevrez un courriel avec un lien de bulletin unique le 2 mars. Verifiez votre courriel etudiant uOttawa et votre dossier pourriel.",
						note: "Le courriel proviendra du fournisseur electoral. Si vous ne le voyez pas d'ici la fin de la journee du 2 mars, verifiez vos pourriels ou contactez le Bureau des elections du SÉUO a elections@seuo-uosu.ca.",
					},
					{
						icon: "🏢",
						title: "En personne",
						body: "Votez devant le bureau du SÉUO. Apportez votre carte étudiante.",
						note: "Les heures precises seront annoncees bientot.",
					},
				],
				eligibilityHeading: "Qui peut voter?",
				eligibilityText: [
					"Tous les etudiant·e·s de premier cycle de l'Université d'Ottawa membres du SÉUO peuvent voter a l'élection presidentielle.",
					"Pour etre admissible, vous devez etre inscrit a au moins un cours a la session d'hiver ou etre en stage CO-OP.",
				],
				ctaLead: "Des questions sur le vote?",
			},
			platform: {
				title: "Plateforme",
				description:
					"La plateforme de Daniel Thorp à la presidence du SÉUO: transparence, representation reelle et meilleurs services étudiants.",
				heading: "Plateforme",
				lead: "De la vraie transparence. Une vraie responsabilisation. De vrais resultats pour les etudiant·e·s.",
				suggestAria: "Proposer une idee de plateforme",
				suggestHeading: "Vous avez une idee?",
				suggestBody:
					"Cette plateforme est pour les etudiant·e·s. S'il manque quelque chose, je veux vous entendre.",
				backTopAria: "Retour en haut",
			},
			faq: {
				title: "FAQ",
				description:
					"Questions frequentes sur la campagne de Daniel Thorp à la presidence du SÉUO, le processus electoral et les moyens de s'impliquer.",
				heading: "Questions frequentes",
				lead: "Reponses rapides sur la campagne, l'election et le role de la presidence du SÉUO.",
				items: [
					{
						question: "Que fait exactement la presidence du SÉUO?",
						answer: "La presidence est la direction generale et la porte-parole du Syndicat etudiant de l'Université d'Ottawa, qui represente plus de 40 000 etudiant·e·s de premier cycle. Elle preside le comite executif, supervise les operations quotidiennes, gere le personnel, represente les etudiant·e·s aupres de l'administration universitaire et des partenaires externes, et rend des comptes au conseil d'administration elu. C'est a la fois de la defense d'interets, de la gouvernance et des operations.",
					},
					{
						question: "Comment voter?",
						answer: "Votez en ligne sur vote.seuo-uosu.com. Vous pouvez aussi voter en personne au bureau du SÉUO avec votre carte etudiante.",
					},
					{
						question: "Qui peut voter a cette election?",
						answer: "Tous les etudiant·e·s de premier cycle de l'Université d'Ottawa membres du SÉUO sont admissibles au vote. Pour etre admissible, vous devez etre inscrit a au moins un cours a la session d'hiver ou etre en stage CO-OP.",
					},
				],
				askHeading: "Une autre question?",
				askBody:
					"Envoyez-la et elle pourrait etre ajoutee a cette page.",
			},
			about: {
				title: "A propos de Daniel",
				description:
					"Decouvrez Daniel Thorp - son experience en gouvernance étudiante, leadership sur le campus et pourquoi il se presente à la présidence du SÉUO.",
				heading: "A propos de Daniel",
				lead: "Etudiant bilingue en genie logiciel (CO-OP) a l'Université d'Ottawa.",
				sections: [
					{
						id: "uosu",
						icon: "🏛️",
						title: "Experience au SÉUO",
						intro: "J'ai servi le syndicat etudiant comme administrateur elu et comme membre de l'executif.",
						roles: [
							{
								title: "Commissaire aux communications",
								period: "Nov 2023 - Avr 2024",
								points: [
									"Direction des communications multicanales pour plus de 40 000 etudiants (reseaux sociaux, infolettres, site web et outreach en personne)",
									"Direction des elections generales de 2024: ajout du vote en personne, resolution de problemes de courriel avec les TI de l'universite et creation d'un suivi en temps reel",
									"Conception et deploiement du portail de vote (Next.js + Microsoft Entra ID + ElectionBuddy), toujours utilise aujourd'hui",
									"Presidence de l'embauche de la premiere ombuds du SÉUO et redaction de la politique de prevention de la violence au travail",
									"Redaction de politiques sur les prises de position et organisation de consultations publiques et assemblees citoyennes",
									"Coordination avec la Vie etudiante, les TI et les Installations pour aligner communications et operations",
									"Revues d'accessibilite avec le Centre en accessibilite",
								],
							},
							{
								title: "Consultant en technologies de l'information",
								period: "Juin - Aout 2024",
								points: [
									"Administration de Microsoft 365 et maintenance du site du SÉUO pour assurer une information etudiante exacte",
									"Recrutement et integration du personnel TI et web (descriptions de poste, entrevues et recommandations d'embauche)",
								],
							},
							{
								title: "Directeur de genie",
								period: "Mai - Aout 2023",
								points: [
									"Elu pour representer les etudiants en genie au conseil d'administration du SÉUO (~40 000 membres)",
									"Leadership de reformes de politiques et de reglements adoptees par le conseil",
									"Formation externe en gouvernance d'entreprise et devoir fiduciaire",
								],
							},
						],
					},
					{
						id: "governance",
						icon: "⚖️",
						title: "Gouvernance du campus",
						intro: "J'ai preside des conseils, redige des politiques et aide a allouer des fonds.",
						roles: [
							{
								title: "VP interne - Societe des etudiants en genie",
								period: "Mai - Sep 2025",
								points: [
									"Supervision de la gouvernance et de la conformite des sous-associations de la SEG",
									"Representation aupres de la faculte sur les enjeux etudiants (espaces, experience etudiante et prise de decision institutionnelle)",
								],
							},
							{
								title: "President du conseil - Societe des etudiants en genie",
								period: "Mai 2024 - Avr 2025",
								points: [
									"Presidence des reunions selon les regles de Robert pour assurer la clarte procedurale",
									"Modernisation de la gouvernance: amelioration des processus, de la documentation et des attentes de conformite",
									"Creation du premier systeme centralise de suivi de la reddition de comptes executive",
								],
							},
							{
								title: "President du conseil - Federation canadienne des etudiants en genie",
								period: "Mai - Aout 2024",
								points: [
									"Presidence d'un conseil national et assurance de la conformite aux politiques et documents de gouvernance",
									"Organisation de la premiere reunion saisonniere en ligne de la FCEG et creation de modeles d'ordres du jour bilingues",
								],
							},
							{
								title: "Membre du comite - Fonds de dotation en genie",
								period: "Mai 2023 - Hiver 2025",
								points: [
									"Plus de 40 heures de deliberation pour evaluer des propositions et des budgets d'initiatives etudiantes",
									"Contribution a l'allocation de plus de 400 000 $ a des initiatives academiques, techniques et etudiantes",
								],
							},
						],
					},
					{
						id: "community",
						icon: "🌍",
						title: "Leadership communautaire et sans but lucratif",
						roles: [
							{
								title: "Capital Technology Network / Hack the Hill",
								period: "Nov 2022 - Present",
								summary:
									"Direction de l'incorporation d'un OBNL jeunesse en tech. Planification et execution de Hack the Hill II - 826 participants, 113 projets et plus de 95 000 $ en commandites.",
							},
							{
								title: "Membre du conseil - OpenMedia",
								period: "Sep 2025 - Present",
								summary:
									"Gouvernance, surveillance financiere et RH pour un organisme national defendant les droits numeriques, la vie privée et un internet ouvert.",
							},
							{
								title: "Président et cofondateur - uOttawa Legal Hackers",
								period: "Oct 2024 - Present",
								summary:
									"Fondateur d'une organisation etudiante au croisement du droit, de la technologie et des politiques publiques. Organisation d'évenements sur les droits numeriques, l'IA et les enjeux emergents.",
							},
							{
								title: "Redacteur - Vie etudiante, Université d'Ottawa",
								period: "Jan 2026 - Present",
								summary:
									"Contribution a l'infolettre étudiante de uOttawa et maintien du contenu web sur Drupal.",
							},
						],
					},
					{
						id: "éducation",
						icon: "🎓",
						title: "Formation",
						roles: [
							{
								title: "Université d'Ottawa",
								period: "Sep 2022 - Avr 2027 (prevu)",
								summary:
									"Baccalauréat en sciences appliquees, génie logiciel (CO-OP). Bilingue (anglais/français).",
							},
						],
					},
				],
			},
		},
	},
} as const;
