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
			faq: "FAQ",
		},
		site: {
			name: "Daniel Thorp",
			tagline: "for UOSU President",
		},
		banner: {
			text: "Vote Now",
		},
		footer: {
			copyright: "Daniel Thorp",
			instagram: "Instagram",
			faq: "FAQ",
		},
		buttons: {
			readPlatform: "Read my Platform",
			aboutMe: "About Me",
			howToVote: "How to Vote ->",
			fullPlatform: "Full Platform ->",
			backHome: "<- Back to Home",
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
				heroLabelPrefix: "For",
				heroLabelEmphasis: "President",
				heroTaglineStrong: "A Union that Works",
				heroTaglineRest: "for All",
				platformHeading: "Platform Priorities",
				platformHighlights: [
					{
						icon: "🏛️",
						title: "Advocacy Power",
						description:
							"Build a permanent advocacy engine inside UOSU, with a presence at Queen's Park, Parliament Hill, and City Hall.",
					},
					{
						icon: "💰",
						title: "Financial Reform",
						description:
							"Implement a formal investment policy, publish quarterly transparency reports, and ensure every fee is spent as students voted.",
					},
					{
						icon: "🏠",
						title: "Housing & Transit",
						description:
							"Push for affordable housing near campus and renegotiate the U-Pass to lower one of the most expensive student transit passes in Canada.",
					},
					{
						icon: "🍺",
						title: "Deliver the Student Pub",
						description:
							"Students have paid $500,000 into the pub levy. Time to use the existing Déjà-Vu space and finally deliver what students voted for.",
					},
					{
						icon: "⚖️",
						title: "Governance Reform",
						description:
							"End closed-door decision-making, improve procedural fairness and recourse, and hold regular open forums.",
					},
					{
						icon: "🤝",
						title: "End Isolationism",
						description:
							"Explore affiliation with OUSA and CASA so uOttawa students can fight alongside other Canadian students, not alone.",
					},
				],
				countdownAria: "Election countdown",
				countdownSr:
					"Voting opens March 2, 2026 and closes March 6, 2026.",
				noscriptCountdown:
					"Voting opens March 2, 2026 and closes March 6, 2026.",
				whyHeading: "Why I'm Running",
				whyBody: [
					"Students are paying more every year.",
					"Rent is rising. Groceries are up. Tuition keeps increasing. Transit costs keep climbing.",
					"Students are contributing millions of dollars in fees to the student union every year.",
					"But too often, the union struggles just to function.",
					"This is not about one decision or one mistake.",
					"It is a pattern.",
					"A student union that has lost focus on delivering results for students.",
					"I'm running for President because students deserve better.",
					"A union that manages their money responsibly.",
					"A union that delivers the services students voted for.",
					"A union that actually fights for students.",
					"It's time for a change.",
				],
			},
			platform: {
				title: "Platform",
				description:
					"Daniel Thorp's platform for UOSU President: transparency, real representation, and better student services.",
				heading: "Platform",
				lead: "Real transparency. Real accountability. Real results for students.",
				preamble: {
					title: "Time for a Change",
					paragraphs: [
						"Students are facing a cost-of-living crisis.",
						"Rent is rising. Groceries are more expensive. Tuition continues to increase. Government grants are shrinking. Transit costs continue to climb. Students are paying more every year while being asked to absorb the risk of structural economic changes.",
						"This is not a temporary problem. It is structural.",
						"Yet too often the student union reacts only after decisions have already been made. Instead of shaping decisions before they happen, we fight after the damage is done. We are constantly playing defense.",
						"That must change.",
						"The University of Ottawa Students' Union should be one of the most powerful student organizations in Canada. Instead, we often operate without coordinated advocacy, without institutional strategy, and without the long-term infrastructure required to influence governments and institutions.",
						"My campaign is about building that infrastructure.",
						"We need to build a permanent advocacy engine inside UOSU.",
					],
				},
				sections: [
					{
						id: "advocacy",
						title: "Advocacy Power: Putting Students in the Room",
						icon: "🏛️",
						intro: [
							"The student union should not simply react to decisions made by governments and universities. It should shape those decisions.",
							"Right now, UOSU is underpowered in key areas of advocacy.",
							"There is no structured presence at Queen's Park. There is no structured presence on Parliament Hill. Student representatives on the university's Board of Governors and Senate operate largely independently, without coordinated support or strategy.",
							"This weakens our ability to advocate effectively for students.",
							"As President, I will work to build a coordinated advocacy structure that allows the student union to engage with governments and institutions strategically.",
							"This includes:",
						],
						points: [
							{
								summary:
									"Ensuring student representatives are present in discussions at Queen's Park and Parliament Hill.",
							},
							{
								summary:
									"Maintaining consistent pressure at City Hall on issues such as housing and transit.",
							},
							{
								summary:
									"Convening and coordinating all student representatives serving on university governance bodies.",
							},
							{
								summary:
									"Holding the University accountable for how funding is spent and how decisions affect students.",
							},
							{
								summary:
									"Establishing dedicated government relations and policy research capacity within UOSU.",
							},
						],
						closing: [
							"Students deserve a seat at the table where decisions are made.",
						],
					},
					{
						id: "isolationism",
						title: "Ending Isolationism",
						icon: "🤝",
						intro: [
							"The University of Ottawa Students' Union is one of the largest student unions in Canada.",
							"We should act like it.",
							"Currently, UOSU operates largely independently from national and provincial student coalitions. That limits our leverage.",
							"Coalitions build influence. Scale builds credibility.",
							"As President, I will explore affiliation with organizations such as:",
						],
						points: [
							{
								summary:
									"The Ontario Undergraduate Student Alliance (OUSA)",
							},
							{
								summary:
									"The Canadian Alliance of Student Associations (CASA)",
							},
						],
						closing: [
							"Working with other student unions allows us to advocate collectively on issues like student financial aid, tuition policy, housing, and public transit.",
							"Students should not be fighting these battles alone.",
						],
					},
					{
						id: "housing",
						title: "Housing",
						icon: "🏠",
						intro: [
							"Housing affordability is one of the most serious issues affecting students today.",
							"Rent in Ottawa has increased dramatically, and students often face limited housing options near campus. Many students are forced to move far from campus or accept poor housing conditions simply because affordable options are scarce.",
							"The student union must play an active role in advocating for solutions.",
							"As President, I will:",
						],
						points: [
							{
								summary:
									"Push the university to expand and maintain affordable residence options.",
							},
							{
								summary:
									"Work with the City of Ottawa to prioritize the development of student housing near campus.",
							},
							{
								summary:
									"Advocate for stronger protections against exploitative rental practices that disproportionately affect students.",
							},
						],
						closing: [
							"Housing policy directly affects students' financial stability, academic success, and overall well-being.",
						],
					},
					{
						id: "transit",
						title: "U-Pass and Transit",
						icon: "🚍",
						intro: [
							"Public transit is essential for thousands of students who rely on OC Transpo to commute to campus.",
							"The U-Pass program was originally negotiated in 2009-2010 during a period of strong transit performance and optimism about the system.",
							"At the time, students negotiated only a 20% discount. That was significantly smaller than discounts achieved at other universities.",
							"Today, Ottawa has one of the most expensive student transit passes in Canada. For example:",
						],
						points: [
							{ summary: "uOttawa: $234.80 per term" },
							{ summary: "UBC: $187.60" },
							{ summary: "University of Alberta: $180.00" },
							{ summary: "Western: $158.59" },
							{ summary: "Waterloo: $131.16" },
						],
						closing: [
							"Transit fares in Ottawa have risen dramatically, and service reliability has often been poor.",
							"Students collectively pay tens of millions of dollars into the transit system every year. If we are paying for it, it needs to work.",
							"As President, I will work to coordinate advocacy across Ottawa's universities and colleges, demand accountability for unreliable transit service, and ensure students are actively represented in future transit negotiations.",
						],
					},
					{
						id: "financial-responsibility",
						title: "Financial Responsibility and Stewardship",
						icon: "💰",
						intro: [
							"Students pay millions of dollars in fees every year. Those funds must be managed responsibly.",
							"As of April 30, 2025, UOSU held approximately $15.9 million in cash, including about $6.2 million in reserves.",
							"Despite this, there were no long-term investments in place.",
							"During a period when safe financial instruments such as Government of Canada bonds and guaranteed investment certificates were offering returns of roughly 4-5%, the union's reserves remained entirely in cash.",
							"This represents a significant opportunity cost.",
							"At the beginning of the 2024 fiscal year, UOSU held roughly $6.5 million in reserves. If those funds had been invested prudently in low-risk instruments such as GICs earning approximately 4.75%, they could have generated nearly $300,000 in a single year.",
							"That revenue could have supported student services without increasing fees.",
							"Student union directors are legally considered trustees of student funds. Under Ontario's prudent investor standard, trustees are expected to exercise care, diligence, and sound financial judgment when managing funds.",
							"Leaving millions of dollars in cash during a high-interest environment raises serious governance concerns.",
						],
						points: [],
						closing: [],
					},
					{
						id: "financial-reform",
						title: "Financial Reform Plan",
						icon: "📊",
						intro: [
							"Within the first 90 days of my presidency, I will:",
						],
						points: [
							{
								summary:
									"Implement a formal investment policy for UOSU.",
							},
							{
								summary:
									"Establish clear liquidity requirements and cash flow projections.",
							},
							{
								summary:
									"Allocate reserves into laddered Government of Canada treasury bills, bonds, and GICs.",
							},
							{
								summary:
									"Develop ethical screening criteria for future investment exposure.",
							},
							{
								summary:
									"Publish quarterly financial transparency reports.",
							},
							{
								summary:
									"Ensure monthly financial statements are published on time.",
							},
							{
								summary:
									"Provide financial literacy and oversight training for Finance Committee members.",
							},
							{
								summary:
									"Review existing student fees to ensure they are spent according to their approved purposes.",
							},
						],
						closing: [
							"Students deserve transparent and responsible financial management.",
						],
					},
					{
						id: "fee-accountability",
						title: "Fee Accountability",
						icon: "🧾",
						intro: [
							"Many student levies are approved through referendums with specific purposes.",
							"However, based on recent budgets, roughly $1.5 million in core operations is currently funded through levies originally approved for different purposes, such as health and wellness services, academic support, athletics, and student life programs.",
							"Students approved these fees under specific conditions.",
							"When funds are reallocated beyond those purposes, students deserve full transparency and democratic oversight.",
						],
						points: [],
						closing: [
							"As President, I will ensure that fees are used in accordance with their original mandates and bring any necessary changes to referendum.",
						],
					},
					{
						id: "student-pub",
						title: "Delivering the Student Pub",
						icon: "🍻",
						intro: [
							"Students have been paying the pub levy for two years.",
							"Yet the pub has not been built.",
							"The levy generates approximately $270,000 per year and has accumulated roughly $500,000 in reserves.",
							"The current strategy has focused on purchasing commercial real estate near campus. However, commercial property in the area is extremely expensive and limited, which has caused the project to stall.",
							"There is a more realistic path.",
							"UOSU already manages the Deja-Vu space in the University Centre (UCU 230). This location includes existing kitchen facilities, seating areas, and a stage.",
							"As President, I will pursue a realistic plan to deliver the pub students voted for:",
						],
						points: [
							{ summary: "Conduct a formal feasibility study." },
							{
								summary:
									"Work with the university to secure necessary approvals.",
							},
							{
								summary:
									"Renovate the existing space where necessary.",
							},
							{ summary: "Obtain the required liquor licence." },
							{
								summary:
									"Develop a sustainable operational model.",
							},
						],
						closing: [
							"Students who pay into this levy deserve to see it delivered responsibly and transparently.",
							"If we collect the fee, we deliver the project.",
						],
					},
					{
						id: "clubs",
						title: "Clubs and Campus Life",
						icon: "🎭",
						intro: [
							"Student clubs are one of the most important parts of campus life.",
							"However, many clubs face barriers simply trying to organize events.",
						],
						points: [
							{
								summary:
									"Room booking systems are slow and bureaucratic.",
							},
							{
								summary:
									"Artificial limits exist on booking credentials.",
							},
							{
								summary:
									"Clubs sometimes wait weeks for approval.",
							},
						],
						closing: [
							"Much of this stems from outdated administrative tools.",
							"As President, I will work to modernize the room booking system by integrating it directly into the UOSU portal. This would reduce administrative workload, speed up booking approvals, remove artificial credential caps, and improve visibility over campus events.",
							"Clubs should be able to focus on building communities, not navigating bureaucratic obstacles.",
						],
					},
					{
						id: "rsgs",
						title: "Supporting Recognized Student Governments",
						icon: "🏫",
						intro: [
							"Recognized Student Governments represent the unique cultures and traditions of each faculty.",
							"The role of UOSU should not be to micromanage them.",
							"Instead, the union should act as an administrative backbone that strengthens their capacity.",
							"As President, I will:",
						],
						points: [
							{
								summary:
									"Organize regular consultation roundtables with RSG leaders.",
							},
							{
								summary:
									"Maintain availability for one-on-one meetings.",
							},
							{
								summary:
									"Provide governance training for student leaders.",
							},
							{
								summary:
									"Provide audit training and financial oversight support.",
							},
							{
								summary:
									"Assist incorporated RSGs with legal compliance.",
							},
							{
								summary:
									"Offer translation services for constitutions and governance documents.",
							},
						],
						closing: [
							"Strong RSGs strengthen the entire campus community.",
						],
					},
					{
						id: "101-week",
						title: "101 Week",
						icon: "🎉",
						intro: [
							"101 Week is one of the most important traditions for welcoming new students.",
							"The role of the student union should be to support RSGs while ensuring safety and accessibility.",
							"My priorities include:",
						],
						points: [
							{
								summary:
									"Keeping participation costs as low as possible.",
							},
							{
								summary:
									"Subsidizing participation for students facing financial barriers.",
							},
							{
								summary:
									"Simplifying the 101 Week Code to ensure it is clear and consistently applied.",
							},
							{
								summary:
									"Improving logistics and planning for large events.",
							},
							{
								summary:
									"Reducing waste and improving sustainability.",
							},
						],
						closing: [
							"The student union should handle administrative complexity so student leaders can focus on creating meaningful experiences.",
						],
					},
					{
						id: "francophonie",
						title: "Francophonie",
						icon: "⚜️",
						intro: [
							"French is the first language I spoke.",
							"I grew up in Quebec and later attended francophone elementary and secondary schools in Ottawa. I understand the linguistic pressures francophone students face on campus, including the tendency for English to become the default language and the linguistic insecurity some students feel.",
							"I continue to actively maintain my French, including by taking courses in French even though my academic program is primarily offered in English.",
							"As President, I will:",
						],
						points: [
							{
								summary:
									"Hold Executive Committee meetings in French.",
							},
							{
								summary:
									"Explore simultaneous interpretation for Board meetings.",
							},
							{
								summary:
									"Strengthen support for the Francophone Affairs Commissioner.",
							},
							{
								summary:
									"Ensure all staff are trained to provide active offer of services in French.",
							},
							{
								summary:
									"Ensure French communications are idiomatic and of equal quality to English communications.",
							},
							{
								summary:
									"Encourage francophone and bilingual clubs and initiatives.",
							},
							{
								summary:
									"Advocate for the maintenance and expansion of French-language courses, including summer courses.",
							},
						],
						closing: [
							"The University of Ottawa is a bilingual institution, and our student union should reflect that reality.",
						],
					},
					{
						id: "student-democracy",
						title: "Stronger Student Democracy",
						icon: "🗳️",
						intro: [
							"The student union must belong to students, not insiders.",
							"I will strengthen transparency and democratic accountability by:",
						],
						points: [
							{
								summary:
									"Protecting student union independence",
								detail: "Students pay for their union and should control it. I will defend the right of students to democratically decide how their union is run, how fees are used, and what issues the union advocates on, without political interference from governments or the university. This includes protecting the union from attempts to impose fees, dissolve services, or override student decisions.",
							},
							{
								summary: "Creating a Student Governance Caucus",
								detail: "Students already sit on Senate, the Board of Governors, and Faculty Councils. But too often they operate in isolation. I will create a Student Governance Caucus to coordinate student representatives across the university so we can share information between Senate, Board, and student leadership, prepare joint student proposals, monitor decisions affecting students, and strengthen accountability and reporting to students.",
							},
							{
								summary:
									"Making student representatives accountable",
								detail: "Students serving on Senate and the Board of Governors should report back to the students they represent. I will require student representatives to provide updates at General Assemblies, participate in regular coordination meetings, and publish summaries of key governance decisions where confidentiality allows.",
							},
							{
								summary:
									"Restoring fair appeals and procedural protections",
								detail: "Students must have a clear way to challenge decisions that affect them. I will strengthen the independence and accessibility of the Appeals Committee by simplifying the appeals process, reducing delays, publishing decisions for transparency, and ensuring the committee operates independently from political leadership.",
							},
						],
						closing: [
							"Students deserve organized, informed representation where decisions are made.",
						],
					},
					{
						id: "leadership",
						title: "Leadership and Accountability",
						icon: "📋",
						intro: [
							"Leadership means accountability.",
							"Throughout my work in student organizations, I have pushed for stronger transparency and governance.",
							"I have:",
						],
						points: [
							{ summary: "Managed nonprofit budgets" },
							{ summary: "Built financial oversight tools" },
							{
								summary:
									"Raised concerns about financial governance",
							},
							{
								summary:
									"Advocated for stronger transparency in student institutions",
							},
						],
						closing: [
							"I have also made mistakes and taken responsibility for them.",
							"Leadership is not about pretending to be perfect. It is about accountability, transparency, and growth.",
						],
					},
					{
						id: "vision",
						title: "The Vision",
						icon: "✨",
						intro: ["Students deserve a union that:"],
						points: [
							{ summary: "Fights for them" },
							{ summary: "Manages their money responsibly" },
							{ summary: "Delivers the services they vote for" },
							{ summary: "Represents them effectively" },
							{ summary: "Operates transparently" },
						],
						closing: [
							"The University of Ottawa Students' Union can be a powerful institution.",
							"But only if we build it that way.",
							"It is time for a change.",
						],
					},
				],
				suggestAria: "Suggest a platform idea",
				suggestHeading: "Have a platform idea?",
				suggestBody:
					"This platform is for students. If there's something missing, I want to hear about it.",
				backTopAria: "Back to top",
			},
			faq: {
				title: "FAQ",
				description:
					"Frequently asked questions about my campaign for UOSU President, the election process, and how to get involved.",
				heading: "Frequently Asked Questions",
				lead: "Quick answers about the campaign, the election, and the role of UOSU President.",
				items: [
					{
						question: "What does the UOSU President actually do?",
						answer: "The President is the chief executive and spokesperson of the University of Ottawa Students' Union, representing more than 40,000 undergraduate students. They chair the Executive Committee, oversee union operations and staff, represent students to the university administration and external stakeholders, and are accountable to the elected Board of Directors. The role combines advocacy, governance, and day-to-day management.",
					},
					{
						question:
							"Why should students care about this election?",
						answer: "Because the UOSU manages millions of dollars in student fees, runs services used by tens of thousands of students, and represents students to the university and government. Its leadership directly affects the services you use and how your interests are defended.",
					},
					{
						question: "How do I vote?",
						answer: "There are three ways: online through the <a href='https://vote.seuo-uosu.com' target='_blank' rel='noopener'>UOSU voting portal</a> (log in with your uOttawa Microsoft account), by email (a unique ballot link was sent to your uOttawa email), or in person at the UOSU office with your student ID.",
					},
					{
						question: "Who can vote in this election?",
						answer: "All undergraduate students at the University of Ottawa who are members of the UOSU are eligible to vote. If you are a full-time or part-time undergraduate student, you almost certainly qualify.",
					},
					{
						question: "Is my vote secret?",
						answer: "Yes. All ballots are secret, and each eligible student can vote only once.",
					},
					{
						question: "Why am I running?",
						answer: "Because students deserve a union that actually works for them. Too often the UOSU struggles to deliver on its promises, manage its resources responsibly, or advocate effectively for students. I'm running to bring serious leadership, stronger accountability, and real advocacy power back to the student union.",
					},
					{
						question: "What are my top priorities?",
						answer: "You can read the full platform <a href='/platform'>here</a>.",
					},
					{
						question: "What experience do I have with the UOSU?",
						answer: "I have served the UOSU both as an elected Board Director and as Communications Commissioner. During that time I worked on governance reform, led the 2024 General Elections, and helped improve transparency and internal processes. I have also been involved in several student organizations across campus.",
					},
					{
						question: "How can I help the campaign?",
						answer: "The most important thing you can do is vote and encourage your friends to vote. You can also share the campaign on social media and talk to classmates about the election.",
					},
				],
				askHeading: "Have another question?",
				askBody: "Send it over and it may be added to this page.",
			},
			about: {
				title: "About Me",
				description:
					"Learn who Daniel is, why he is running, and the experience he brings to lead UOSU.",
				heading: "About Me",
				lead: "Bilingual Software Engineering (CO-OP) student at the University of Ottawa, raised in the Ottawa region.",
				personalIntro: [
					"Daniel Thorp is a bilingual Software Engineering student at the University of Ottawa. He grew up in Chelsea, Quebec and has spent most of his life in the Ottawa region.",
					"He became involved in student organizations early in university and has since served in leadership roles across UOSU, the Engineering Students' Society, and nonprofit organizations.",
					"Daniel is running for UOSU President because students deserve a union that works, advocates effectively, and is accountable to the people who fund it.",
				],
				whyRunning: {
					heading: "Why I'm Running",
					body: [
						"Every undergraduate student at uOttawa pays fees to the Students' Union. That money should fund services, advocacy, and opportunities for students.",
						"Too often, the union struggles to deliver on those promises. Over the past several years, Daniel has worked inside student government and seen where weak governance and poor accountability hold students back.",
						"He is running for President to rebuild a union that takes its responsibilities seriously and delivers results students can actually feel.",
					],
					priorities: [
						"Real advocacy on student costs",
						"Transparency and financial accountability",
						"Services that actually work",
						"A union that represents all students",
					],
				},
				sections: [
					{
						id: "student-life",
						icon: "🎒",
						title: "Student Life on Campus",
						intro: "Daniel's experience is not only in governance. He has also been active in the day-to-day student community.",
						roles: [
							{
								title: "Campus Involvement",
								period: "Since First Year",
								points: [
									"Served as a 101 Week Guide with the Engineering Students' Society",
									"Supported student clubs and helped organize campus events",
									"Worked with student groups across faculties on outreach and programming",
									"Organized workshops, project showcases, and hackathon activities",
								],
							},
						],
					},
					{
						id: "uosu",
						icon: "🏛️",
						title: "Experience with the Students' Union",
						intro: "I've served the Students' Union as both an elected Board Director and an Executive.",
						roles: [
							{
								title: "Communications Commissioner",
								period: "Nov 2023 - Apr 2024",
								points: [
									"Directed communications reaching 40,000+ undergraduate students across social media, newsletters, and the UOSU website",
									"Led the 2024 General Elections, introducing in-person voting and resolving election email delivery issues with University IT",
									"Designed and deployed the online voting portal used in UOSU elections",
									"Chaired the hiring of UOSU's first Ombudsperson and drafted the Workplace Violence Prevention Policy",
									"Drafted governance and advocacy policies and ran public consultations and town halls",
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
						title: "Campus Governance & Student Leadership",
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
			about: "À propos",
			faq: "FAQ",
		},
		site: {
			name: "Daniel Thorp",
			tagline: "à la présidence du SÉUO",
		},
		banner: {
			text: "Votez maintenant",
		},
		footer: {
			copyright: "Daniel Thorp",
			instagram: "Instagram",
			faq: "FAQ",
		},
		buttons: {
			readPlatform: "Lire ma plateforme",
			aboutMe: "À propos de moi",
			howToVote: "Comment voter ->",
			fullPlatform: "Plateforme complete ->",
			backHome: "<- Retour a l'accueil",
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
			defaultTitle: "Votez Daniel Thorp - Présidence du SÉUO",
			defaultDescription:
				"Daniel Thorp se présente à la présidence du Syndicat étudiant de l'Université d'Ottawa. Découvrez sa plateforme et sa vision pour les étudiant·e·s.",
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
				heroLabelPrefix: "À la",
				heroLabelEmphasis: "présidence",
				heroTaglineStrong: "Un syndicat qui fonctionne",
				heroTaglineRest: "pour tous.",
				platformHeading: "Priorites de la plateforme",
				platformHighlights: [
					{
						icon: "🏛️",
						title: "Force de representation",
						description:
							"Bâtir une capacite permanente de representation au sein du SÉUO, avec une presence a Queen's Park, a la Colline du Parlement et a l'hotel de ville.",
					},
					{
						icon: "💰",
						title: "Reforme financiere",
						description:
							"Adopter une politique d'investissement officielle, publier des rapports de transparence trimestriels et s'assurer que chaque frais est depense selon le vote etudiant.",
					},
					{
						icon: "🏠",
						title: "Logement et transport",
						description:
							"Faire avancer le logement abordable pres du campus et renegocier le laissez-passer U-Pass afin de reduire l'un des titres de transport etudiant les plus chers au Canada.",
					},
					{
						icon: "🍺",
						title: "Livrer enfin le pub etudiant",
						description:
							"Les etudiant·e·s ont deja verse 500 000 $ au prelevement pour le pub. Il est temps d'utiliser l'espace Deja-Vu et de livrer enfin ce que les etudiant·e·s ont approuve.",
					},
					{
						icon: "⚖️",
						title: "Reforme de la gouvernance",
						description:
							"Mettre fin aux decisions prises a huis clos, ameliorer l'equite procedurale et les recours, et tenir des forums ouverts reguliers.",
					},
					{
						icon: "🤝",
						title: "Sortir de l'isolement",
						description:
							"Evaluer une affiliation avec l'OUSA et l'ACAE pour que les etudiant·e·s de uOttawa puissent se battre avec les autres etudiant·e·s au Canada, et non seuls.",
					},
				],
				countdownSr:
					"Le vote ouvre le 2 mars 2026 et se termine le 6 mars 2026.",
				noscriptCountdown:
					"Le vote ouvre le 2 mars 2026 et se termine le 6 mars 2026.",
				whyHeading: "Pourquoi je me presente",
				whyBody: [
					"Les étudiant·e·s paient plus chaque année.",
					"Les loyers augmentent. L'épicerie coûte plus cher. Les frais de scolarité continuent de grimper. Les coûts de transport en commun ne cessent d'augmenter.",
					"Les étudiant·e·s contribuent des millions de dollars en frais au syndicat étudiant chaque année.",
					"Mais trop souvent, le syndicat peine simplement à fonctionner.",
					"Ce n'est pas une question d'une seule décision ou d'une seule erreur.",
					"C'est un problème structurel.",
					"Un syndicat étudiant qui a perdu de vue l'obtention de résultats pour les étudiant·e·s.",
					"Je me présente à la présidence parce que les étudiant·e·s méritent mieux.",
					"Un syndicat qui gère leur argent de manière responsable.",
					"Un syndicat qui offre les services pour lesquels les étudiant·e·s ont voté.",
					"Un syndicat qui se bat vraiment pour les étudiant·e·s.",
					"Il est temps de changer.",
				],
			},
			platform: {
				title: "Plateforme",
				description:
					"La plateforme de Daniel Thorp à la présidence du SÉUO: transparence, representation reelle et meilleurs services étudiants.",
				heading: "Plateforme",
				lead: "De la vraie transparence. Une vraie responsabilisation. De vrais resultats pour les etudiant·e·s.",
				preamble: {
					title: "Il est temps de changer",
					paragraphs: [
						"Les etudiant·e·s font face a une crise du cout de la vie.",
						"Les loyers augmentent. L'epicerie coute plus cher. Les frais de scolarite continuent de monter. Les subventions gouvernementales diminuent. Le transport en commun coute de plus en plus cher. Les etudiant·e·s paient davantage chaque annee tout en absorbant les risques de changements economiques structurels.",
						"Ce n'est pas un probleme temporaire. C'est structurel.",
						"Pourtant, trop souvent, le syndicat etudiant reagit seulement apres que les decisions sont deja prises. Au lieu d'influencer les decisions avant qu'elles ne tombent, on se bat une fois les dommages faits. On joue constamment sur la defensive.",
						"Ca doit changer.",
						"Le Syndicat etudiant de l'Universite d'Ottawa devrait etre l'une des organisations etudiantes les plus influentes du Canada. Or, on fonctionne trop souvent sans representation coordonnee, sans strategie institutionnelle et sans l'infrastructure a long terme necessaire pour influencer les gouvernements et les institutions.",
						"Ma campagne vise a construire cette infrastructure.",
						"Nous devons batir un moteur de representation permanent au sein du SÉUO.",
					],
				},
				sections: [
					{
						id: "advocacy",
						title: "Force de representation: mettre les etudiant·e·s dans la salle",
						icon: "🏛️",
						intro: [
							"Le syndicat etudiant ne doit pas seulement reagir aux decisions des gouvernements et de l'universite. Il doit contribuer a les faconner.",
							"En ce moment, le SÉUO manque de moyens dans des dossiers de representation cles.",
							"Il n'y a pas de presence structuree a Queen's Park. Il n'y a pas de presence structuree sur la Colline du Parlement. Les representant·e·s etudiant·e·s au Conseil des gouverneurs et au Senat de l'universite travaillent en grande partie de facon isolee, sans appui ni strategie coordonnes.",
							"Cela affaiblit notre capacite a defendre efficacement les etudiant·e·s.",
							"Comme président, je travaillerai a mettre en place une structure de representation coordonnee qui permettra au syndicat etudiant d'intervenir de facon strategique aupres des gouvernements et des institutions.",
							"Cela comprend:",
						],
						points: [
							{
								summary:
									"S'assurer que les representant·e·s etudiant·e·s sont present·e·s dans les discussions a Queen's Park et sur la Colline du Parlement.",
							},
							{
								summary:
									"Maintenir une pression constante a l'hotel de ville sur des enjeux comme le logement et le transport.",
							},
							{
								summary:
									"Rassembler et coordonner l'ensemble des representant·e·s etudiant·e·s qui siegent dans les instances de gouvernance universitaire.",
							},
							{
								summary:
									"Exiger des comptes de l'universite sur l'utilisation des fonds et sur l'impact de ses decisions pour les etudiant·e·s.",
							},
							{
								summary:
									"Mettre en place au SÉUO une capacite dediee en relations gouvernementales et en recherche de politiques publiques.",
							},
						],
						closing: [
							"Les etudiant·e·s méritent une place à la table où les décisions se prennent.",
						],
					},
					{
						id: "isolationism",
						title: "Sortir de l'isolement",
						icon: "🤝",
						intro: [
							"Le Syndicat etudiant de l'Universite d'Ottawa est l'un des plus grands syndicats etudiants au Canada.",
							"Nous devons agir en consequence.",
							"Actuellement, le SÉUO opere largement en marge des coalitions etudiantes nationales et provinciales. Cela limite notre levier.",
							"Les coalitions construisent de l'influence. L'ampleur renforce la crédibilité.",
							"Comme président, j'explorerai une affiliation avec des organisations comme:",
						],
						points: [
							{
								summary:
									"L'Ontario Undergraduate Student Alliance (OUSA)",
							},
							{
								summary:
									"L'Alliance canadienne des associations etudiantes (ACAE)",
							},
						],
						closing: [
							"Travailler avec d'autres syndicats etudiants nous permet de porter une representation collective sur l'aide financiere, les politiques de scolarite, le logement et le transport en commun.",
							"Les etudiant·e·s ne devraient pas mener ces combats seul·e·s.",
						],
					},
					{
						id: "housing",
						title: "Logement",
						icon: "🏠",
						intro: [
							"L'abordabilite du logement est l'un des enjeux les plus graves pour les etudiant·e·s aujourd'hui.",
							"Les loyers a Ottawa ont fortement augmente, et les options de logement abordable pres du campus sont limitees. Beaucoup d'etudiant·e·s doivent s'eloigner du campus ou accepter des conditions de logement mediocres faute d'alternatives.",
							"Le syndicat etudiant doit jouer un role actif pour faire avancer des solutions.",
							"Comme président, je vais:",
						],
						points: [
							{
								summary:
									"Pousser l'universite a augmenter et maintenir des options de residence abordables.",
							},
							{
								summary:
									"Travailler avec la Ville d'Ottawa pour prioriser le developpement de logements etudiants pres du campus.",
							},
							{
								summary:
									"Defendre un renforcement des protections contre les pratiques locatives abusives qui touchent de facon disproportionnee les etudiant·e·s.",
							},
						],
						closing: [
							"Les politiques de logement influencent directement la stabilite financiere, la reussite academique et le bien-etre des etudiant·e·s.",
						],
					},
					{
						id: "transit",
						title: "U-Pass et transport en commun",
						icon: "🚍",
						intro: [
							"Le transport en commun est essentiel pour des milliers d'etudiant·e·s qui dependent d'OC Transpo pour se rendre au campus.",
							"Le programme U-Pass a ete negocie a l'origine en 2009-2010, a une epoque de bonne performance du reseau et d'optimisme face au systeme.",
							"A ce moment, les etudiant·e·s n'avaient obtenu qu'un rabais de 20 %, bien en dessous de ce qui a ete obtenu dans d'autres universites.",
							"Aujourd'hui, Ottawa a l'un des laissez-passer etudiants les plus chers au Canada. Par exemple:",
						],
						points: [
							{ summary: "uOttawa: 234,80 $ par trimestre" },
							{ summary: "UBC: 187,60 $" },
							{ summary: "Universite de l'Alberta: 180,00 $" },
							{ summary: "Western: 158,59 $" },
							{ summary: "Waterloo: 131,16 $" },
						],
						closing: [
							"Les tarifs de transport a Ottawa ont fortement augmente, et la fiabilite du service a souvent ete mediocre.",
							"Les etudiant·e·s versent collectivement des dizaines de millions de dollars au systeme de transport chaque annee. Si on paie, le service doit fonctionner.",
							"Comme président, je travaillerai a coordonner la representation des universites et colleges d'Ottawa, a exiger des comptes sur l'irregularite du service, et a garantir une representation etudiante active lors des prochaines negociations sur le transport.",
						],
					},
					{
						id: "financial-responsibility",
						title: "Responsabilite et saine gestion financiere",
						icon: "💰",
						intro: [
							"Les etudiant·e·s paient des millions de dollars en frais chaque annee. Ces fonds doivent etre geres de maniere responsable.",
							"Au 30 avril 2025, le SÉUO detenait environ 15,9 millions de dollars en liquidites, dont environ 6,2 millions en reserves.",
							"Malgre cela, aucun placement a long terme n'etait en place.",
							"Dans une periode ou des instruments financiers securitaires, comme les obligations du gouvernement du Canada et les CPG, offraient des rendements d'environ 4 a 5 %, les reserves du syndicat sont demeurees entierement en liquidites.",
							"Cela represente un cout d'opportunite important.",
							"Au debut de l'exercice 2024, le SÉUO detenait environ 6,5 millions de dollars en reserves. Si ces fonds avaient ete places prudemment dans des instruments a faible risque, comme des CPG a environ 4,75 %, ils auraient pu generer pres de 300 000 $ en une seule annee.",
							"Ce revenu aurait pu soutenir des services etudiants sans hausse de frais.",
							"Les administrateur·trice·s du syndicat etudiant sont juridiquement considere·e·s comme fiduciaires des fonds etudiants. Selon la norme ontarienne de l'investisseur prudent, ils et elles doivent faire preuve de diligence, de prudence et d'un jugement financier solide dans la gestion des fonds.",
							"Laisser des millions en encaisse dans un contexte de taux eleves souleve de serieuses inquietudes de gouvernance.",
						],
						points: [],
						closing: [],
					},
					{
						id: "financial-reform",
						title: "Plan de reforme financiere",
						icon: "📊",
						intro: [
							"Dans les 90 premiers jours de ma présidence, je vais:",
						],
						points: [
							{
								summary:
									"Mettre en oeuvre une politique d'investissement officielle pour le SÉUO.",
							},
							{
								summary:
									"Etablir des exigences claires de liquidite et des projections de flux de tresorerie.",
							},
							{
								summary:
									"Repartir les reserves dans des bons du Tresor, obligations et CPG du gouvernement du Canada selon une structure echelonnee.",
							},
							{
								summary:
									"Developper des criteres de filtrage ethique pour l'exposition future des placements.",
							},
							{
								summary:
									"Publier des rapports trimestriels de transparence financiere.",
							},
							{
								summary:
									"Assurer la publication ponctuelle des etats financiers mensuels.",
							},
							{
								summary:
									"Offrir une formation en litteratie financiere et en surveillance aux membres du comite des finances.",
							},
							{
								summary:
									"Reviser les frais etudiants existants pour s'assurer qu'ils sont depenses selon leurs objectifs approuves.",
							},
						],
						closing: [
							"Les etudiant·e·s méritent une gestion financière transparente et responsable.",
						],
					},
					{
						id: "fee-accountability",
						title: "Reddition de comptes sur les frais",
						icon: "🧾",
						intro: [
							"De nombreux prelevements etudiants sont approuves par referendum pour des objectifs precis.",
							"Or, selon les budgets recents, environ 1,5 million de dollars en operations centrales est actuellement finance par des prelevements initialement approuves pour d'autres fins, notamment la sante et le bien-etre, le soutien academique, l'athletisme et la vie etudiante.",
							"Les etudiant·e·s ont approuve ces frais selon des conditions precises.",
							"Quand des fonds sont reaffectes au-dela de ces objectifs, les etudiant·e·s meritent une transparence complete et une supervision democratique.",
						],
						points: [],
						closing: [
							"Comme président, je m'assurerai que les frais sont utilises conformement a leur mandat initial et je soumettrai tout changement necessaire a referendum.",
						],
					},
					{
						id: "student-pub",
						title: "Livrer enfin le pub etudiant",
						icon: "🍻",
						intro: [
							"Les etudiant·e·s paient le prelevement pour le pub depuis deux ans.",
							"Pourtant, le pub n'a toujours pas ete realise.",
							"Ce prelevement genere environ 270 000 $ par annee et a accumule environ 500 000 $ en reserves.",
							"La strategie actuelle mise sur l'achat d'un immeuble commercial pres du campus. Or, ce type de propriete est extremement couteux et rare dans le secteur, ce qui a bloque le projet.",
							"Il existe une avenue plus realiste.",
							"Le SÉUO gere deja l'espace Deja-Vu au Centre universitaire (UCU 230). Cet emplacement comprend deja une cuisine, des places assises et une scene.",
							"Comme président, je poursuivrai un plan realiste pour livrer le pub pour lequel les etudiant·e·s ont vote:",
						],
						points: [
							{
								summary:
									"Mener une etude de faisabilite formelle.",
							},
							{
								summary:
									"Travailler avec l'universite pour obtenir les approbations necessaires.",
							},
							{
								summary:
									"Renover l'espace existant lorsque necessaire.",
							},
							{
								summary: "Obtenir le permis d'alcool requis.",
							},
							{
								summary:
									"Developper un modele operationnel durable.",
							},
						],
						closing: [
							"Les etudiant·e·s qui paient ce prelevement meritent de voir le projet livre de facon responsable et transparente.",
							"Si on percoit les frais, on livre le projet.",
						],
					},
					{
						id: "clubs",
						title: "Clubs et vie de campus",
						icon: "🎭",
						intro: [
							"Les clubs etudiants sont l'un des piliers de la vie sur le campus.",
							"Pourtant, de nombreux clubs se heurtent a des obstacles simplement pour organiser des evenements.",
						],
						points: [
							{
								summary:
									"Les systemes de reservation de salles sont lents et bureaucratiques.",
							},
							{
								summary:
									"Des limites artificielles existent sur les identifiants de reservation.",
							},
							{
								summary:
									"Les clubs attendent parfois des semaines pour obtenir une approbation.",
							},
						],
						closing: [
							"Une grande part de ce probleme vient d'outils administratifs depasses.",
							"Comme président, je travaillerai a moderniser la reservation de salles en l'integrant directement au portail du SÉUO. Cela reduira la charge administrative, accelerera les approbations, supprimera les plafonds artificiels sur les identifiants et ameliorera la visibilite des evenements campus.",
							"Les clubs devraient pouvoir se concentrer sur la creation de communautes, pas sur la navigation bureaucratique.",
						],
					},
					{
						id: "rsgs",
						title: "Soutenir les gouvernements etudiants reconnus",
						icon: "🏫",
						intro: [
							"Les gouvernements etudiants reconnus representent les cultures et traditions propres a chaque faculte.",
							"Le role du SÉUO n'est pas de les microgerer.",
							"Le syndicat doit plutot agir comme colonne vertebrale administrative pour renforcer leur capacite.",
							"Comme président, je vais:",
						],
						points: [
							{
								summary:
									"Organiser des tables rondes de consultation regulieres avec les directions des GER.",
							},
							{
								summary:
									"Rester disponible pour des rencontres individuelles.",
							},
							{
								summary:
									"Offrir des formations en gouvernance pour les leaders etudiants.",
							},
							{
								summary:
									"Offrir de la formation en audit et un appui en surveillance financiere.",
							},
							{
								summary:
									"Soutenir les GER constitues en personne morale dans leurs obligations legales.",
							},
							{
								summary:
									"Offrir des services de traduction pour les constitutions et documents de gouvernance.",
							},
						],
						closing: [
							"Des GER solides renforcent l'ensemble de la communaute campus.",
						],
					},
					{
						id: "101-week",
						title: "Semaine 101",
						icon: "🎉",
						intro: [
							"La Semaine 101 est l'une des traditions les plus importantes pour accueillir les nouvelles personnes etudiantes.",
							"Le rôle du syndicat étudiant est d'appuyer les GER tout en assurant la sécurité et l'accessibilité.",
							"Mes priorites incluent:",
						],
						points: [
							{
								summary:
									"Maintenir les couts de participation aussi bas que possible.",
							},
							{
								summary:
									"Subventionner la participation des etudiant·e·s qui font face a des obstacles financiers.",
							},
							{
								summary:
									"Simplifier le Code de la Semaine 101 pour qu'il soit clair et applique de facon coherente.",
							},
							{
								summary:
									"Ameliorer la logistique et la planification des grands evenements.",
							},
							{
								summary:
									"Reduire le gaspillage et ameliorer la durabilite.",
							},
						],
						closing: [
							"Le syndicat etudiant devrait prendre en charge la complexite administrative pour que les leaders etudiants puissent se concentrer sur des experiences marquantes.",
						],
					},
					{
						id: "francophonie",
						title: "Francophonie",
						icon: "⚜️",
						intro: [
							"Le francais est ma langue maternelle.",
							"J'ai grandi au Quebec, puis j'ai frequente des ecoles primaires et secondaires francophones a Ottawa. Je comprends les pressions linguistiques que vivent les etudiant·e·s francophones sur le campus, notamment la tendance de l'anglais a devenir la langue par defaut et l'insecurite linguistique que certain·e·s ressentent.",
							"Je continue d'entretenir activement mon francais, notamment en suivant des cours en francais meme si mon programme est majoritairement offert en anglais.",
							"Comme président, je vais:",
						],
						points: [
							{
								summary:
									"Tenir les reunions du Comite executif en francais.",
							},
							{
								summary:
									"Explorer l'interpretation simultanee pour les reunions du Conseil d'administration.",
							},
							{
								summary:
									"Renforcer l'appui a la personne commissaire aux affaires francophones.",
							},
							{
								summary:
									"S'assurer que tout le personnel est forme a l'offre active de services en francais.",
							},
							{
								summary:
									"Assurer des communications en francais idiomatiques et d'une qualite equivalente a celles en anglais.",
							},
							{
								summary:
									"Encourager les clubs et initiatives francophones et bilingues.",
							},
							{
								summary:
									"Defendre le maintien et l'expansion de l'offre de cours en francais, y compris durant l'ete.",
							},
						],
						closing: [
							"L'Universite d'Ottawa est une institution bilingue, et notre syndicat etudiant doit refleter cette realite.",
						],
					},
					{
						id: "student-democracy",
						title: "Une democratie etudiante plus forte",
						icon: "🗳️",
						intro: [
							"Le syndicat étudiant doit appartenir aux étudiant·e·s, pas aux initié·e·s.",
							"Je renforcerai la transparence et la reddition de comptes democratique en:",
						],
						points: [
							{
								summary:
									"Proteger l'independance du syndicat etudiant",
								detail: "Les etudiant·e·s financent leur syndicat et doivent en garder le controle. Je defendrai le droit des etudiant·e·s a decider democratiquement du fonctionnement de leur syndicat, de l'utilisation des frais et des enjeux de representation, sans ingerence politique des gouvernements ou de l'universite. Cela inclut proteger le syndicat contre les tentatives d'imposer des frais, de dissoudre des services ou d'annuler des decisions etudiantes.",
							},
							{
								summary:
									"Creer un caucus de gouvernance etudiante",
								detail: "Des etudiant·e·s siegent deja au Senat, au Conseil des gouverneurs et aux conseils de faculte. Mais trop souvent, ces personnes travaillent en silos. Je creerai un caucus de gouvernance etudiante pour coordonner la representation etudiante a travers l'universite, afin de partager l'information entre le Senat, le Conseil et les leaders etudiants, preparer des propositions conjointes, suivre les decisions qui touchent les etudiant·e·s et renforcer la reddition de comptes envers la population etudiante.",
							},
							{
								summary:
									"Rendre les representant·e·s etudiant·e·s responsables devant les etudiant·e·s",
								detail: "Les etudiant·e·s qui siegent au Senat et au Conseil des gouverneurs doivent rendre des comptes a celles et ceux qu'ils representent. J'exigerai que les representant·e·s etudiant·e·s presentent des mises a jour aux Assemblees generales, participent a des rencontres de coordination regulieres et publient des syntheses des decisions de gouvernance importantes lorsque la confidentialite le permet.",
							},
							{
								summary:
									"Retablir des mecanismes d'appel equitables et des protections procedurales",
								detail: "Les etudiant·e·s doivent avoir une voie claire pour contester les decisions qui les touchent. Je renforcerai l'independance et l'accessibilite du Comite d'appel en simplifiant le processus, en reduisant les delais, en publiant les decisions pour plus de transparence, et en assurant l'autonomie du comite par rapport au leadership politique.",
							},
						],
						closing: [
							"Les étudiant·e·s méritent une représentation organisée et informée là où les décisions se prennent.",
						],
					},
					{
						id: "leadership",
						title: "Leadership et responsabilisation",
						icon: "📋",
						intro: [
							"Le leadership, c'est la responsabilite.",
							"Dans mes engagements en milieu etudiant, j'ai constamment pousse pour plus de transparence et une meilleure gouvernance.",
							"J'ai:",
						],
						points: [
							{
								summary:
									"Gere des budgets d'organismes sans but lucratif",
							},
							{
								summary:
									"Developpe des outils de surveillance financiere",
							},
							{
								summary:
									"Souleve des enjeux de gouvernance financiere",
							},
							{
								summary:
									"Plaide pour une transparence accrue dans les institutions etudiantes",
							},
						],
						closing: [
							"J'ai aussi fait des erreurs et j'en ai pris la responsabilite.",
							"Le leadership ne consiste pas a pretendre etre parfait. Il repose sur la responsabilisation, la transparence et la progression.",
						],
					},
					{
						id: "vision",
						title: "La vision",
						icon: "✨",
						intro: ["Les etudiant·e·s meritent un syndicat qui:"],
						points: [
							{ summary: "Se bat pour elles et eux" },
							{
								summary:
									"Gere leur argent de facon responsable",
							},
							{
								summary:
									"Livre les services pour lesquels elles et ils votent",
							},
							{ summary: "Les represente efficacement" },
							{ summary: "Fonctionne avec transparence" },
						],
						closing: [
							"Le Syndicat etudiant de l'Universite d'Ottawa peut etre une institution puissante.",
							"Mais seulement si on le construit ainsi.",
							"Il est temps de changer.",
						],
					},
				],
				suggestAria: "Proposer une idee de plateforme",
				suggestHeading: "Vous avez une idee?",
				suggestBody:
					"Cette plateforme est pour les étudiant·e·s. S'il manque quelque chose, je veux vous écouter.",
				backTopAria: "Retour en haut",
			},
			faq: {
				title: "FAQ",
				description:
					"Questions fréquentes sur la campagne de Daniel Thorp à la présidence du SÉUO, le processus électoral et les moyens de s'impliquer.",
				heading: "Questions fréquentes",
				lead: "Réponses rapides sur la campagne, l'élection et le rôle de la présidence du SÉUO.",
				items: [
					{
						question: "Que fait exactement la présidence du SÉUO?",
						answer: "La présidence est la direction générale et la porte-parole du Syndicat étudiant de l'Université d'Ottawa, qui représente plus de 40 000 étudiant·e·s de premier cycle. Elle préside le comité exécutif, supervise les opérations du syndicat et son personnel, représente les étudiant·e·s auprès de l'administration universitaire et des partenaires externes, et rend des comptes au conseil d'administration élu. Le rôle combine défense d'intérêts, gouvernance et gestion quotidienne.",
					},
					{
						question: "Pourquoi les étudiant·e·s devraient-ils se soucier de cette élection?",
						answer: "Parce que le SÉUO gère des millions de dollars en frais étudiants, administre des services utilisés par des dizaines de milliers d'étudiant·e·s et représente les étudiant·e·s auprès de l'université et du gouvernement. Sa direction influence directement les services que vous utilisez et la manière dont vos intérêts sont défendus.",
					},
					{
						question: "Comment voter?",
						answer: "Il y a trois façons: en ligne via le <a href='https://vote.seuo-uosu.com' target='_blank' rel='noopener'>portail de vote du SÉUO</a> (connexion avec votre compte Microsoft uOttawa), par courriel (un lien de bulletin unique a été envoyé à votre courriel uOttawa), ou en personne au bureau du SÉUO avec votre carte étudiante.",
					},
					{
						question: "Qui peut voter à cette élection?",
						answer: "Tous les étudiant·e·s de premier cycle de l'Université d'Ottawa membres du SÉUO sont admissibles au vote. Si vous êtes étudiant·e de premier cycle à temps plein ou à temps partiel, vous êtes presque certainement admissible.",
					},
					{
						question: "Mon vote est-il secret?",
						answer: "Oui. Tous les bulletins sont secrets, et chaque étudiant·e admissible ne peut voter qu'une seule fois.",
					},
					{
						question: "Pourquoi je me présente?",
						answer: "Parce que les étudiant·e·s méritent un syndicat qui travaille réellement pour elles et eux. Trop souvent, le SÉUO a de la difficulté à respecter ses engagements, à gérer ses ressources de façon responsable ou à défendre efficacement les étudiant·e·s. Je me présente pour ramener un leadership sérieux, une meilleure reddition de comptes et une vraie force d'advocacy au syndicat étudiant.",
					},
					{
						question: "Quelles sont mes priorités principales?",
						answer: "Vous pouvez lire la plateforme complète <a href='/fr/platform'>ici</a>.",
					},
					{
						question: "Quelle expérience ai-je avec le SÉUO?",
						answer: "J'ai servi le SÉUO à la fois comme administrateur élu au conseil d'administration et comme commissaire aux communications. Pendant cette période, j'ai travaillé sur des réformes de gouvernance, dirigé les élections générales de 2024 et aidé à améliorer la transparence et les processus internes. Je me suis aussi impliqué dans plusieurs organisations étudiantes sur le campus.",
					},
					{
						question: "Comment puis-je aider la campagne?",
						answer: "La chose la plus importante que vous pouvez faire est de voter et d'encourager vos ami·e·s à voter. Vous pouvez aussi partager la campagne sur les réseaux sociaux et parler de l'élection à vos collègues de classe.",
					},
				],
				askHeading: "Une autre question?",
				askBody:
					"Envoyez-la et elle pourrait etre ajoutee a cette page.",
			},
			about: {
				title: "À propos de moi",
				description:
					"Découvrez qui est Daniel, pourquoi il se présente et l'expérience qu'il apporte pour diriger le SÉUO.",
				heading: "À propos de moi",
				lead: "Etudiant bilingue en genie logiciel (CO-OP) a l'Université d'Ottawa, originaire de la region d'Ottawa.",
				personalIntro: [
					"Daniel Thorp est un etudiant bilingue en genie logiciel a l'Université d'Ottawa. Il a grandi a Chelsea, au Quebec, et a passe la majeure partie de sa vie dans la region d'Ottawa.",
					"Il s'est implique tres tot dans la vie etudiante et a depuis occupe des roles de leadership au SÉUO, a la Societe des etudiants en genie et dans des organismes sans but lucratif.",
					"Daniel se présente à la présidence du SÉUO parce que les étudiant·e·s méritent un syndicat qui fonctionne, qui défend leurs intérêts et qui rend des comptes.",
				],
				whyRunning: {
					heading: "Pourquoi je me presente",
					body: [
						"Chaque etudiant·e de premier cycle à uOttawa paie des frais au Syndicat etudiant. Cet argent devrait financer des services, de la defense d'interets et des occasions concretes.",
						"Trop souvent, le syndicat peine a respecter ces engagements. Au cours des dernieres annees, Daniel a travaille de l'interieur et a vu comment une gouvernance faible et un manque de reddition de comptes nuisent aux etudiant·e·s.",
						"Il se présente à la présidence pour rebâtir un syndicat qui prend ses responsabilités au sérieux et qui livre des résultats concrets.",
					],
					priorities: [
						"Une vraie defense des couts etudiants",
						"Transparence et responsabilite financiere",
						"Des services qui fonctionnent vraiment",
						"Un syndicat qui represente tous les etudiant·e·s",
					],
				},
				sections: [
					{
						id: "vie-etudiante",
						icon: "🎒",
						title: "Vie etudiante sur le campus",
						intro: "L'experience de Daniel ne se limite pas a la gouvernance. Il est aussi implique dans la vie etudiante au quotidien.",
						roles: [
							{
								title: "Implication sur le campus",
								period: "Depuis la premiere annee",
								points: [
									"Guide de la semaine 101 avec la Societe des etudiants en genie",
									"Soutien a des clubs et organisation d'evenements etudiants",
									"Collaboration avec des groupes etudiants de plusieurs facultes",
									"Organisation d'ateliers, de vitrines de projets et d'activites de hackathon",
								],
							},
						],
					},
					{
						id: "uosu",
						icon: "🏛️",
						title: "Experience avec le Syndicat etudiant",
						intro: "J'ai servi le syndicat etudiant comme administrateur elu et comme membre de l'executif.",
						roles: [
							{
								title: "Commissaire aux communications",
								period: "Nov 2023 - Avr 2024",
								points: [
									"Direction des communications pour plus de 40 000 etudiant·e·s via les reseaux sociaux, les infolettres et le site du SÉUO",
									"Direction des elections generales de 2024: ajout du vote en personne, resolution de problemes de courriel avec les TI de l'universite et creation d'un suivi en temps reel",
									"Conception et deploiement du portail de vote en ligne utilise pour les elections du SÉUO",
									"Présidence de l'embauche de la premiere ombuds du SÉUO et redaction de la politique de prevention de la violence au travail",
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
						title: "Gouvernance du campus et leadership etudiant",
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
								title: "Président du conseil - Societe des etudiants en genie",
								period: "Mai 2024 - Avr 2025",
								points: [
									"Présidence des reunions selon les regles de Robert pour assurer la clarte procedurale",
									"Modernisation de la gouvernance: amelioration des processus, de la documentation et des attentes de conformite",
									"Creation du premier systeme centralise de suivi de la reddition de comptes executive",
								],
							},
							{
								title: "Président du conseil - Federation canadienne des etudiants en genie",
								period: "Mai - Aout 2024",
								points: [
									"Présidence d'un conseil national et assurance de la conformite aux politiques et documents de gouvernance",
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
								period: "Nov 2022 - présent",
								summary:
									"Direction de l'incorporation d'un OBNL jeunesse en tech. Planification et execution de Hack the Hill II - 826 participants, 113 projets et plus de 95 000 $ en commandites.",
							},
							{
								title: "Membre du conseil - OpenMedia",
								period: "Sep 2025 - présent",
								summary:
									"Gouvernance, surveillance financiere et RH pour un organisme national defendant les droits numeriques, la vie privée et un internet ouvert.",
							},
							{
								title: "Président et cofondateur - uOttawa Legal Hackers",
								period: "Oct 2024 - présent",
								summary:
									"Fondateur d'une organisation etudiante au croisement du droit, de la technologie et des politiques publiques. Organisation d'évenements sur les droits numeriques, l'IA et les enjeux emergents.",
							},
							{
								title: "Redacteur - Vie etudiante, Université d'Ottawa",
								period: "Jan 2026 - présent",
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
