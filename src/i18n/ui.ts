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
			title: "Archived website",
			text: "This site was created for Daniel Thorp's 2026 campaign for UOSU President.",
		},
		footer: {
			copyright: "Daniel Thorp",
			instagram: "Instagram",
			faq: "FAQ",
		},
		buttons: {
			readPlatform: "Read my Platform",
			aboutMe: "About Me",
			fullPlatform: "Full Platform ->",
			backHome: "<- Back to Home",
			suggestIdea: "Suggest an Idea ->",
			askQuestion: "Ask a Question ->",
		},
		lang: {
			switch: "Français",
			switchTo: "Switch to {language}",
		},
		layout: {
			defaultTitle: "Daniel Thorp for UOSU President - Campaign Archive",
			defaultDescription:
				"Archive of Daniel Thorp's 2026 campaign for UOSU President, including the platform, about page, and FAQ.",
			titleSuffix: "Daniel Thorp Campaign Archive",
			author: "Daniel Thorp",
			ogSiteName: "Daniel Thorp for UOSU President",
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
				whyHeading: "Why I'm Running",
				whyBody: [
					"I'm running because students deserve a union that actually works.",
					"Right now, too many students pay fees to a union that too often struggles just to function.",
					"Promises are made. Projects stall. Information is hidden. Money is wasted. And students are left paying more while getting less.",
					"This is not about one bad decision. It is a pattern.",
					"A student union that has lost focus on delivering results for students.",
					"I'm running to change that.",
					"To fix what is broken.",
					"To make the union transparent, accountable, and focused on the priorities students actually care about.",
					"To build a union that works for all students, not just the insiders.",
					"It's time for a change.",
				],
			},
			platform: {
				title: "Platform",
				description:
					"Archive of Daniel Thorp's 2026 platform for UOSU President: transparency, real representation, and better student services.",
				heading: "Platform",
				lead: "Real transparency. Real accountability. Real results for students.",
				preamble: {
					title: "Time for a Change",
					paragraphs: [
						"Students are facing a cost-of-living crisis.",
						"Rent is rising. Groceries cost more. Tuition keeps going up. Grants are shrinking. Transit is expensive, unreliable, and getting worse.",
						"Students are paying more every year while being asked to carry the risk when institutions fail.",
						"Too often, the student union reacts only after decisions have already been made. We fight after the damage is done instead of shaping decisions before they happen.",
						"The University of Ottawa Students' Union should be one of the most powerful student organizations in Canada. Instead, it is too often underpowered, reactive, and weakened by poor governance.",
						"My campaign is about changing that.",
						"We need to rebuild UOSU into a serious, effective institution that delivers for students.",
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
								detail: "UOSU currently has no structured presence at the provincial or federal level. I will establish regular engagement with MPPs and MPs on issues that affect students, including tuition policy, student financial aid, housing, and immigration.",
							},
							{
								summary:
									"Maintaining consistent pressure at City Hall on issues such as housing and transit.",
								detail: "Municipal decisions on zoning, transit funding, and rental regulation directly affect students. I will ensure UOSU is actively tracking and engaging with City Council on the issues that matter most to students living and commuting in Ottawa.",
							},
							{
								summary:
									"Convening and coordinating all student representatives serving on university governance bodies.",
								detail: "Student representatives on Senate, the Board of Governors, and Faculty Councils often operate independently without shared strategy or support. I will bring them together regularly to coordinate positions, share information, and present a unified student voice on governance decisions.",
							},
							{
								summary:
									"Holding the University accountable for how funding is spent and how decisions affect students.",
								detail: "Students contribute significantly to university revenues through tuition and fees. I will push for greater transparency in how the university allocates those resources and ensure that decisions affecting students are subject to meaningful consultation.",
							},
							{
								summary:
									"Establishing dedicated government relations and policy research capacity within UOSU.",
								detail: "Effective advocacy requires preparation. I will work to build internal policy research and government relations capacity so that UOSU can develop evidence-based positions, track legislative changes, and engage proactively rather than reactively.",
							},
						],
						closing: [
							"Students deserve a seat at the table where decisions are made.",
							"I will actively consult students and ensure student priorities are brought into major campus planning decisions, not treated as an afterthought.",
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
						id: "campus-access",
						title: "Campus Access and Student Experience",
						icon: "🧭",
						intro: [
							"Students should be able to access campus services without unnecessary barriers.",
							"As President, I will focus on practical fixes students can actually feel in their day-to-day life.",
						],
						points: [
							{
								summary:
									"Push the university to maintain affordable and accessible parking",
								detail: "With Brooks and Lot K closing, students who rely on driving to campus are losing affordable options. I will advocate for the university to provide replacement parking that is accessible and reasonably priced, especially for students commuting from areas with limited transit.",
							},
							{
								summary:
									"Fix the co-op portal and stop charging for broken services",
								detail: "The co-op portal is slow, unreliable, and frustrating for students trying to find placements. Students should not be paying full co-op fees for a service that does not work properly. I will push for a functional portal and ensure students are not charged for inadequate services.",
							},
							{
								summary:
									"Expand late-night and 24/7 study space on campus",
								detail: "During exams and peak periods, students are regularly forced out of study spaces when buildings close. I will work with the university to expand access to late-night and around-the-clock study areas so students can work when they need to.",
							},
							{
								summary:
									"Consult students on campus transportation and infrastructure planning",
								detail: "Major campus planning decisions are too often made without meaningful student input. I will ensure students are actively consulted and that their priorities are included in transportation, infrastructure, and development decisions.",
							},
						],
						closing: [],
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
									"Review existing student fees to ensure they are spent according to their approved purposes and bring any necessary changes to referendum.",
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
						points: [
							{
								summary:
									"Oppose new fees imposed on students without clear democratic approval and meaningful student consent.",
							},
						],
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
							"UOSU already manages the Déjà-Vu space in the University Centre (UCU 230). This location includes existing kitchen facilities, seating areas, and a stage.",
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
							{
								summary:
									"Challenge arbitrary and excessive cleaning fees",
								detail: "Some clubs are charged cleaning fees that are disproportionate to the events they host. These fees discourage student activity and place an unfair burden on smaller groups. I will push to review and standardize cleaning fee policies so they are transparent and reasonable.",
							},
							{
								summary:
									"Unlock underused campus spaces for student events",
								detail: "There are spaces on campus that sit empty while clubs struggle to find venues. I will work with the university to identify and open up underused rooms and facilities so student groups have more options for hosting events and activities.",
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
							{
								summary:
									"Create written governance agreements so RSGs can supervise sub-associations and gain all of the benefits of formal recognition.",
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
							"UOSU should provide the administrative backbone for 101 Week, including insurance and risk management support, centralized digital tools for contracts and waivers, coordination for multi-RSG initiatives, and advocacy when issues arise with the university.",
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
								detail: "Students pay for their union and should control it. I will defend the right of students to democratically decide how their union is run, how fees are used, and what issues the union advocates on, without political interference from governments, the university, or unelected administrators. This includes protecting the union from attempts to impose fees without democratic approval, dissolve services, or override student decisions.",
							},
							{
								summary:
									"Making public information truly public",
								detail: "Anything that is supposed to be public should be easy to find and actually visible. Students should not have to dig through hidden files or insider channels to understand what their union is doing.",
							},
							{
								summary: "Creating a Student Governance Caucus",
								detail: "Students already sit on Senate, the Board of Governors, and Faculty Councils. But too often they operate in isolation. I will create a Student Governance Caucus to coordinate student representatives across the university so we can share information between Senate, Board, and student leadership, prepare joint student proposals, monitor decisions affecting students, and strengthen accountability and reporting to students.",
							},
							{
								summary:
									"Open meetings, delegate speaking rights, and regular town halls",
								detail: "Students should have clear and accessible ways to participate in decision-making. I will support delegate speaking rights in meetings and hold regular town halls and open forums so students can raise issues directly.",
							},
							{
								summary:
									"Making student representatives accountable",
								detail: "Students serving on Senate and the Board of Governors should report back to the students they represent. I will require student representatives to provide updates at General Assemblies, participate in regular coordination meetings, and publish summaries of key governance decisions where confidentiality allows.",
							},
							{
								summary:
									"Protecting advocacy rights of elected representatives",
								detail: "Elected representatives should be able to advocate openly for the students who elected them. Fiduciary duty should protect students' interests, not be misused to silence legitimate student advocacy.",
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
							{
								summary: "Stop wasteful legal spending",
								detail: "Legal services should be used to protect students and defend their interests, not to fight them. I will review how UOSU uses legal resources and redirect spending toward services that directly support students, such as tenant rights clinics and academic appeals support.",
							},
							{
								summary:
									"Prioritize union-owned digital tools over expensive third-party platforms",
								detail: "UOSU has spent significant money on third-party platforms that do not deliver adequate value. I will prioritize building and maintaining sustainable, union-owned digital infrastructure that serves students better and costs less over time.",
							},
							{
								summary:
									"Promote pragmatic and collaborative labour relations",
								detail: "A collaborative approach to labour relations protects the services students depend on while respecting workers. I will work to reduce unnecessary grievance costs through proactive communication and fair workplace practices.",
							},
						],
						closing: [
							"I have also made mistakes and taken responsibility for them.",
							"Leadership is not about pretending to be perfect. It is about accountability, transparency, and growth.",
							"The student union should stay focused on the issues students actually pay it to address: affordability, services, advocacy, campus life, and representation.",
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
					"Archive copy of frequently asked questions from Daniel Thorp's 2026 campaign for UOSU President.",
				heading: "Frequently Asked Questions",
				lead: "Historical answers about the campaign, the election, and the role of UOSU President.",
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
					"Archive copy of Daniel Thorp's 2026 campaign about page, including background and experience.",
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
			title: "Site archivé",
			text: "Ce site a été créé pour la campagne de Daniel Thorp à la présidence du SÉUO en 2026.",
		},
		footer: {
			copyright: "Daniel Thorp",
			instagram: "Instagram",
			faq: "FAQ",
		},
		buttons: {
			readPlatform: "Lire ma plateforme",
			aboutMe: "À propos de moi",
			fullPlatform: "Plateforme complète ->",
			backHome: "<- Retour à l'accueil",
			suggestIdea: "Proposer une idée ->",
			askQuestion: "Poser une question ->",
		},
		lang: {
			switch: "English",
			switchTo: "Passer en {language}",
		},
		layout: {
			defaultTitle:
				"Daniel Thorp à la présidence du SÉUO - Archive de campagne",
			defaultDescription:
				"Archive de la campagne 2026 de Daniel Thorp à la présidence du SÉUO, incluant la plateforme, la page À propos et la FAQ.",
			titleSuffix: "Archive de campagne Daniel Thorp",
			author: "Daniel Thorp",
			ogSiteName: "Daniel Thorp à la présidence du SÉUO",
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
				heroAria: "Présentation de la campagne",
				heroLabelPrefix: "À la",
				heroLabelEmphasis: "présidence",
				heroTaglineStrong: "Un syndicat qui fonctionne",
				heroTaglineRest: "pour tous.",
				platformHeading: "Priorités de la plateforme",
				platformHighlights: [
					{
						icon: "🏛️",
						title: "Force de représentation",
						description:
							"Bâtir une capacité permanente de représentation au sein du SÉUO, avec une présence à Queen's Park, à la Colline du Parlement et à l'hôtel de ville.",
					},
					{
						icon: "💰",
						title: "Réforme financière",
						description:
							"Adopter une politique d'investissement officielle, publier des rapports de transparence trimestriels et s'assurer que chaque frais est dépensé selon le vote étudiant.",
					},
					{
						icon: "🏠",
						title: "Logement et transport",
						description:
							"Faire avancer le logement abordable près du campus et renégocier le laissez-passer U-Pass afin de réduire l'un des titres de transport étudiant les plus chers au Canada.",
					},
					{
						icon: "🍺",
						title: "Livrer enfin le pub étudiant",
						description:
							"Les étudiant·e·s ont déjà versé 500 000 $ au prélèvement pour le pub. Il est temps d'utiliser l'espace Déjà-Vu et de livrer enfin ce que les étudiant·e·s ont approuvé.",
					},
					{
						icon: "⚖️",
						title: "Réforme de la gouvernance",
						description:
							"Mettre fin aux décisions prises à huis clos, améliorer l'équité procédurale et les recours, et tenir des forums ouverts réguliers.",
					},
					{
						icon: "🤝",
						title: "Sortir de l'isolement",
						description:
							"Évaluer une affiliation avec l'OUSA et l'ACAE pour que les étudiant·e·s de uOttawa puissent se battre avec les autres étudiant·e·s au Canada, et non seuls.",
					},
				],
				whyHeading: "Pourquoi je me présente",
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
					"Archive de la plateforme 2026 de Daniel Thorp à la présidence du SÉUO : transparence, représentation réelle et meilleurs services étudiants.",
				heading: "Plateforme",
				lead: "De la vraie transparence. Une vraie responsabilisation. De vrais résultats pour les étudiant·e·s.",
				preamble: {
					title: "Il est temps de changer",
					paragraphs: [
						"Les étudiant·e·s font face à une crise du coût de la vie.",
						"Les loyers augmentent. L'épicerie coûte plus cher. Les frais de scolarité continuent de monter. Les subventions gouvernementales diminuent. Le transport en commun coûte de plus en plus cher. Les étudiant·e·s paient davantage chaque année tout en absorbant les risques de changements économiques structurels.",
						"Ce n'est pas un problème temporaire. C'est structurel.",
						"Pourtant, trop souvent, le syndicat étudiant réagit seulement après que les décisions sont déjà prises. Au lieu d'influencer les décisions avant qu'elles ne tombent, on se bat une fois les dommages faits. On joue constamment sur la défensive.",
						"Ça doit changer.",
						"Le Syndicat étudiant de l'Université d'Ottawa devrait être l'une des organisations étudiantes les plus influentes du Canada. Or, on fonctionne trop souvent sans représentation coordonnée, sans stratégie institutionnelle et sans l'infrastructure à long terme nécessaire pour influencer les gouvernements et les institutions.",
						"Ma campagne vise à construire cette infrastructure.",
						"Nous devons bâtir un moteur de représentation permanent au sein du SÉUO.",
					],
				},
				sections: [
					{
						id: "advocacy",
						title: "Force de représentation: mettre les étudiant·e·s dans la salle",
						icon: "🏛️",
						intro: [
							"Le syndicat étudiant ne doit pas seulement réagir aux décisions des gouvernements et de l'université. Il doit contribuer à les façonner.",
							"En ce moment, le SÉUO manque de moyens dans des dossiers de représentation clés.",
							"Il n'y a pas de présence structurée à Queen's Park. Il n'y a pas de présence structurée sur la Colline du Parlement. Les représentant·e·s étudiant·e·s au Bureau des gouverneurs et au Sénat de l'université travaillent en grande partie de façon isolée, sans appui ni stratégie coordonnée.",
							"Cela affaiblit notre capacité à défendre efficacement les étudiant·e·s.",
							"Comme président, je travaillerai à mettre en place une structure de représentation coordonnée qui permettra au syndicat étudiant d'intervenir de façon stratégique auprès des gouvernements et des institutions.",
							"Cela comprend:",
						],
						points: [
							{
								summary:
									"S'assurer que les représentant·e·s étudiant·e·s sont présent·e·s dans les discussions à Queen's Park et sur la Colline du Parlement.",
								detail: "Le SÉUO n'a actuellement aucune presence structurée au niveau provincial ou fédéral. Je mettrai en place un engagement régulier auprès des député·e·s provinciaux et fédéraux sur les enjeux qui touchent les étudiant·e·s, incluant la politique de scolarité, l'aide financière, le logement et l'immigration.",
							},
							{
								summary:
									"Maintenir une pression constante à l'hôtel de ville sur des enjeux comme le logement et le transport.",
								detail: "Les décisions municipales sur le zonage, le financement du transport et la réglementation locative touchent directement les étudiant·e·s. Je m'assurerai que le SÉUO suit activement les travaux du conseil municipal et intervient sur les enjeux qui comptent le plus pour les étudiant·e·s vivant et se déplaçant à Ottawa.",
							},
							{
								summary:
									"Rassembler et coordonner l'ensemble des représentant·e·s étudiant·e·s qui siègent dans les instances de gouvernance universitaire.",
								detail: "Les représentant·e·s étudiant·e·s au Sénat, au Bureau des gouverneurs et aux conseils de faculté travaillent souvent de façon isolée, sans stratégie partagée ni appui. Je les rassemblerai régulièrement pour coordonner les positions, partager l'information et présenter une voix étudiante unifiée sur les décisions de gouvernance.",
							},
							{
								summary:
									"Exiger des comptes de l'université sur l'utilisation des fonds et sur l'impact de ses décisions pour les étudiant·e·s.",
								detail: "Les étudiant·e·s contribuent considérablement aux revenus de l'université par les frais de scolarité et les droits divers. Je pousserai pour une plus grande transparence dans l'affectation de ces ressources et je m'assurerai que les décisions qui touchent les étudiant·e·s font l'objet d'une consultation significative.",
							},
							{
								summary:
									"Mettre en place au SÉUO une capacité dédiée en relations gouvernementales et en recherche de politiques publiques.",
								detail: "Une représentation efficace exige de la préparation. Je travaillerai à développer une capacité interne en recherche de politiques et en relations gouvernementales afin que le SÉUO puisse formuler des positions fondées sur des données probantes, suivre les changements législatifs et intervenir de façon proactive plutôt que réactive.",
							},
						],
						closing: [
							"Les étudiant·e·s méritent une place à la table où les décisions se prennent.",
							"Je vais consulter activement les étudiant·e·s et m'assurer que leurs priorités sont intégrées aux grandes décisions de planification du campus, et non traitées comme une simple formalité.",
						],
					},
					{
						id: "isolationism",
						title: "Sortir de l'isolement",
						icon: "🤝",
						intro: [
							"Le Syndicat étudiant de l'Université d'Ottawa est l'un des plus grands syndicats étudiants au Canada.",
							"Nous devons agir en conséquence.",
							"Actuellement, le SÉUO opère largement en marge des coalitions étudiantes nationales et provinciales. Cela limite notre levier.",
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
									"L'Alliance canadienne des associations étudiantes (ACAE)",
							},
						],
						closing: [
							"Travailler avec d'autres syndicats étudiants nous permet de porter une représentation collective sur l'aide financière, les politiques de scolarité, le logement et le transport en commun.",
							"Les étudiant·e·s ne devraient pas mener ces combats seul·e·s.",
						],
					},
					{
						id: "housing",
						title: "Logement",
						icon: "🏠",
						intro: [
							"L'abordabilité du logement est l'un des enjeux les plus graves pour les étudiant·e·s aujourd'hui.",
							"Les loyers à Ottawa ont fortement augmenté, et les options de logement abordable près du campus sont limitées. Beaucoup d'étudiant·e·s doivent s'éloigner du campus ou accepter des conditions de logement médiocres faute d'alternatives.",
							"Le syndicat étudiant doit jouer un rôle actif pour faire avancer des solutions.",
							"Comme président, je vais:",
						],
						points: [
							{
								summary:
									"Pousser l'université à augmenter et maintenir des options de résidence abordables.",
							},
							{
								summary:
									"Travailler avec la Ville d'Ottawa pour prioriser le développement de logements étudiants près du campus.",
							},
							{
								summary:
									"Défendre un renforcement des protections contre les pratiques locatives abusives qui touchent de façon disproportionnée les étudiant·e·s.",
							},
						],
						closing: [
							"Les politiques de logement influencent directement la stabilité financière, la réussite  académique et le bien-être des étudiant·e·s.",
						],
					},
					{
						id: "transit",
						title: "U-Pass et transport en commun",
						icon: "🚍",
						intro: [
							"Le transport en commun est essentiel pour des milliers d'étudiant·e·s qui dépendent d'OC Transpo pour se rendre au campus.",
							"Le programme U-Pass a été négocié à l'origine en 2009-2010, à une époque de bonne performance du réseau et d'optimisme face au système.",
							"À ce moment, les étudiant·e·s n'avaient obtenu qu'un rabais de 20 %, bien en dessous de ce qui a été obtenu dans d'autres universités.",
							"Aujourd'hui, Ottawa a l'un des laissez-passer étudiants les plus chers au Canada. Par exemple:",
						],
						points: [
							{ summary: "uOttawa: 234,80 $ par trimestre" },
							{ summary: "UBC: 187,60 $" },
							{ summary: "Université de l'Alberta: 180,00 $" },
							{ summary: "Western: 158,59 $" },
							{ summary: "Waterloo: 131,16 $" },
						],
						closing: [
							"Les tarifs de transport à Ottawa ont fortement augmenté, et la fiabilité du service a souvent été médiocre.",
							"Les étudiant·e·s versent collectivement des dizaines de millions de dollars au système de transport chaque année. Si on paie, le service doit fonctionner.",
							"Comme président, je travaillerai à coordonner la représentation des universités et collèges d'Ottawa, à exiger des comptes sur l'irrégularité du service, et à garantir une représentation étudiante active lors des prochaines négociations sur le transport.",
						],
					},
					{
						id: "campus-access",
						title: "Accès au campus et expérience étudiante",
						icon: "🧭",
						intro: [
							"Les étudiant·e·s devraient pouvoir accéder aux services du campus sans obstacles inutiles.",
							"Comme président, je vais prioriser des correctifs concrets que les étudiant·e·s ressentent au quotidien.",
						],
						points: [
							{
								summary:
									"Maintenir des options de stationnement abordables et accessibles",
								detail: "Avec la fermeture de Brooks et du stationnement K, les étudiant·e·s qui dépendent de la voiture perdent des options abordables. Je ferai pression pour que l'université offre un stationnement de remplacement accessible et à prix raisonnable, surtout pour celles et ceux qui vivent dans des zones mal desservies par le transport en commun.",
							},
							{
								summary:
									"Corriger le portail co-op et cesser de facturer des services défaillants",
								detail: "Le portail co-op est lent, peu fiable et frustrant pour les étudiant·e·s qui cherchent un stage. Les étudiant·e·s ne devraient pas payer le plein tarif pour un service qui ne fonctionne pas. Je pousserai pour un portail fonctionnel et m'assurerai que les étudiant·e·s ne sont pas facturé·e·s pour des services inadéquats.",
							},
							{
								summary:
									"Augmenter les espaces d'étude de fin de soirée et 24/7",
								detail: "Pendant les examens et les périodes de pointe, les étudiant·e·s sont régulièrement forcé·e·s de quitter les espaces d'étude à la fermeture des bâtiments. Je travaillerai avec l'université pour élargir l'accès aux espaces d'étude en soirée et en tout temps.",
							},
							{
								summary:
									"Consulter les étudiant·e·s sur le transport et l'infrastructure du campus",
								detail: "Les grandes décisions de planification du campus sont trop souvent prises sans consultation étudiante significative. Je m'assurerai que les étudiant·e·s sont activement consulté·e·s et que leurs priorités sont intégrées aux décisions de transport, d'infrastructure et de développement.",
							},
						],
						closing: [],
					},
					{
						id: "financial-responsibility",
						title: "Responsabilité et saine gestion financière",
						icon: "💰",
						intro: [
							"Les étudiant·e·s paient des millions de dollars en frais chaque année. Ces fonds doivent être gérés de manière responsable.",
							"Au 30 avril 2025, le SÉUO détenait environ 15,9 millions de dollars en liquidités, dont environ 6,2 millions en réserves.",
							"Malgré cela, aucun placement à long terme n'était en place.",
							"Dans une période où des instruments financiers sécuritaires, comme les obligations du gouvernement du Canada et les CPG, offraient des rendements d'environ 4 à 5 %, les réserves du syndicat sont demeurées entièrement en liquidités.",
							"Cela représente un coût d'opportunité important.",
							"Au début de l'exercice 2024, le SÉUO détenait environ 6,5 millions de dollars en réserves. Si ces fonds avaient été placés prudemment dans des instruments à faible risque, comme des CPG à environ 4,75 %, ils auraient pu générer près de 300 000 $ en une seule année.",
							"Ce revenu aurait pu soutenir des services étudiants sans hausse de frais.",
							"Les administrateur·trice·s du syndicat étudiant sont juridiquement considéré·e·s comme fiduciaires des fonds étudiants. Selon la norme ontarienne de l'investisseur prudent, ils et elles doivent faire preuve de diligence, de prudence et d'un jugement financier solide dans la gestion des fonds.",
							"Laisser des millions en encaisse dans un contexte de taux élevés soulève de sérieuses inquiétudes de gouvernance.",
						],
						points: [],
						closing: [],
					},
					{
						id: "financial-reform",
						title: "Plan de réforme financière",
						icon: "📊",
						intro: [
							"Dans les 90 premiers jours de ma présidence, je vais:",
						],
						points: [
							{
								summary:
									"Mettre en œuvre une politique d'investissement officielle pour le SÉUO.",
							},
							{
								summary:
									"Établir des exigences claires de liquidité et des projections de flux de trésorerie.",
							},
							{
								summary:
									"Répartir les réserves dans des bons du Trésor, obligations et CPG du gouvernement du Canada selon une structure échelonnée.",
							},
							{
								summary:
									"Développer des critères de filtrage éthique pour l'exposition future des placements.",
							},
							{
								summary:
									"Publier des rapports trimestriels de transparence financière.",
							},
							{
								summary:
									"Assurer la publication ponctuelle des états financiers mensuels.",
							},
							{
								summary:
									"Offrir une formation en littératie financière et en surveillance aux membres du comité des finances.",
							},
							{
								summary:
									"Réviser les frais étudiants existants pour s'assurer qu'ils sont dépensés selon leurs objectifs approuvés et soumettre tout changement nécessaire à référendum.",
							},
						],
						closing: [
							"Les étudiant·e·s méritent une gestion financière transparente et responsable.",
						],
					},
					{
						id: "fee-accountability",
						title: "Reddition de comptes sur les frais",
						icon: "🧾",
						intro: [
							"De nombreux prélèvements étudiants sont approuvés par référendum pour des objectifs précis.",
							"Or, selon les budgets récents, environ 1,5 million de dollars en opérations centrales est actuellement financé par des prélèvements initialement approuvés pour d'autres fins, notamment la santé et le bien-être, le soutien académique, l'athlétisme et la vie étudiante.",
							"Les étudiant·e·s ont approuvé ces frais selon des conditions précises.",
							"Quand des fonds sont réaffectés au-delà de ces objectifs, les étudiant·e·s méritent une transparence complète et une supervision démocratique.",
						],
						points: [
							{
								summary:
									"S'opposer aux nouveaux frais imposés sans approbation démocratique claire ni consentement étudiant significatif.",
							},
						],
						closing: [
							"Comme président, je m'assurerai que les frais sont utilisés conformément à leur mandat initial et je soumettrai tout changement nécessaire à référendum.",
						],
					},
					{
						id: "student-pub",
						title: "Livrer enfin le pub étudiant",
						icon: "🍻",
						intro: [
							"Les étudiant·e·s paient le prélèvement pour le pub depuis deux ans.",
							"Pourtant, le pub n'a toujours pas été réalisé.",
							"Ce prélèvement génère environ 270 000 $ par année et a accumulé environ 500 000 $ en réserves.",
							"La stratégie actuelle mise sur l'achat d'un immeuble commercial près du campus. Or, ce type de propriété est extrêmement coûteux et rare dans le secteur, ce qui a bloqué le projet.",
							"Il existe une avenue plus réaliste.",
							"Le SÉUO gère déjà l'espace Déjà-Vu au Centre universitaire (UCU 230). Cet emplacement comprend déjà une cuisine, des places assises et une scène.",
							"Comme président, je poursuivrai un plan réaliste pour livrer le pub pour lequel les étudiant·e·s ont voté:",
						],
						points: [
							{
								summary:
									"Mener une étude de faisabilité formelle.",
							},
							{
								summary:
									"Travailler avec l'université pour obtenir les approbations nécessaires.",
							},
							{
								summary:
									"Rénover l'espace existant lorsque nécessaire.",
							},
							{
								summary: "Obtenir le permis d'alcool requis.",
							},
							{
								summary:
									"Développer un modèle opérationnel durable.",
							},
						],
						closing: [
							"Les étudiant·e·s qui paient ce prélèvement méritent de voir le projet livré de façon responsable et transparente.",
							"Si on perçoit les frais, on livre le projet.",
						],
					},
					{
						id: "clubs",
						title: "Clubs et vie de campus",
						icon: "🎭",
						intro: [
							"Les clubs étudiants sont l'un des piliers de la vie sur le campus.",
							"Pourtant, de nombreux clubs se heurtent à des obstacles simplement pour organiser des événements.",
						],
						points: [
							{
								summary:
									"Les systèmes de réservation de salles sont lents et bureaucratiques.",
							},
							{
								summary:
									"Des limites artificielles existent sur les identifiants de réservation.",
							},
							{
								summary:
									"Les clubs attendent parfois des semaines pour obtenir une approbation.",
							},
							{
								summary:
									"Contester les frais de nettoyage arbitraires et excessifs",
								detail: "Certains clubs se voient imposer des frais de nettoyage disproportionnés par rapport aux événements qu'ils organisent. Ces frais découragent l'activité étudiante et pénalisent injustement les plus petits groupes. Je pousserai pour réviser et normaliser les politiques de frais de nettoyage afin qu'elles soient transparentes et raisonnables.",
							},
							{
								summary:
									"Débloquer des espaces campus sous-utilisés pour les événements étudiants",
								detail: "Des espaces sur le campus restent vides alors que les clubs peinent à trouver des lieux. Je travaillerai avec l'université pour identifier et ouvrir les salles et installations sous-utilisées afin que les groupes étudiants aient plus d'options pour organiser des activités.",
							},
						],
						closing: [
							"Une grande part de ce problème vient d'outils administratifs dépassés.",
							"Comme président, je travaillerai à moderniser la réservation de salles en l'intégrant directement au portail du SÉUO. Cela réduira la charge administrative, accélérera les approbations, supprimera les plafonds artificiels sur les identifiants et améliorera la visibilité des événements campus.",
							"Les clubs devraient pouvoir se concentrer sur la création de communautés, pas sur la navigation bureaucratique.",
						],
					},
					{
						id: "rsgs",
						title: "Soutenir les gouvernements étudiants reconnus",
						icon: "🏫",
						intro: [
							"Les gouvernements étudiants reconnus représentent les cultures et traditions propres à chaque faculté.",
							"Le rôle du SÉUO n'est pas de les microgérer.",
							"Le syndicat doit plutôt agir comme colonne vertébrale administrative pour renforcer leur capacité.",
							"Comme président, je vais:",
						],
						points: [
							{
								summary:
									"Organiser des tables rondes de consultation régulières avec les directions des GÉR.",
							},
							{
								summary:
									"Rester disponible pour des rencontres individuelles.",
							},
							{
								summary:
									"Offrir des formations en gouvernance pour les leaders étudiants.",
							},
							{
								summary:
									"Offrir de la formation en audit et un appui en surveillance financière.",
							},
							{
								summary:
									"Soutenir les GÉR constitués en personne morale dans leurs obligations légales.",
							},
							{
								summary:
									"Offrir des services de traduction pour les constitutions et documents de gouvernance.",
							},
							{
								summary:
									"Établir des ententes de gouvernance écrites permettant aux GÉR de superviser leurs sous-associations et de bénéficier de tous les avantages de la reconnaissance formelle.",
							},
						],
						closing: [
							"Des GÉR solides renforcent l'ensemble de la communauté campus.",
						],
					},
					{
						id: "101-week",
						title: "Semaine 101",
						icon: "🎉",
						intro: [
							"La Semaine 101 est l'une des traditions les plus importantes pour accueillir les nouvelles personnes étudiantes.",
							"Le rôle du syndicat étudiant est d'appuyer les GÉR tout en assurant la sécurité et l'accessibilité.",
							"Mes priorités incluent:",
						],
						points: [
							{
								summary:
									"Maintenir les coûts de participation aussi bas que possible.",
							},
							{
								summary:
									"Subventionner la participation des étudiant·e·s qui font face à des obstacles financiers.",
							},
							{
								summary:
									"Simplifier le Code de la Semaine 101 pour qu'il soit clair et appliqué de façon cohérente.",
							},
							{
								summary:
									"Améliorer la logistique et la planification des grands événements.",
							},
							{
								summary:
									"Réduire le gaspillage et améliorer la durabilité.",
							},
						],
						closing: [
							"Le syndicat étudiant devrait prendre en charge la complexité administrative pour que les leaders étudiants puissent se concentrer sur des expériences marquantes.",
							"Le SÉUO doit fournir l'ossature administrative de la Semaine 101, y compris l'assurance et la gestion des risques, des outils numériques centralisés pour les contrats et décharges, la coordination des initiatives multi-GÉR, et la représentation auprès de l'université lorsque des enjeux surviennent.",
						],
					},
					{
						id: "francophonie",
						title: "Francophonie",
						icon: "⚜️",
						intro: [
							"Le français est ma langue maternelle.",
							"J'ai grandi au Québec, puis j'ai fréquenté des écoles primaires et secondaires francophones à Ottawa. Je comprends les pressions linguistiques que vivent les étudiant·e·s francophones sur le campus, notamment la tendance de l'anglais à devenir la langue par défaut et l'insécurité linguistique que certain·e·s ressentent.",
							"Je continue d'entretenir activement mon français, notamment en suivant des cours en français même si mon programme est majoritairement offert en anglais.",
							"Comme président, je vais:",
						],
						points: [
							{
								summary:
									"Tenir les réunions du Comité exécutif en français.",
							},
							{
								summary:
									"Explorer l'interprétation simultanée pour les réunions du Conseil d'administration.",
							},
							{
								summary:
									"Renforcer l'appui à la personne commissaire aux affaires francophones.",
							},
							{
								summary:
									"S'assurer que tout le personnel est formé à l'offre active de services en français.",
							},
							{
								summary:
									"Assurer des communications en français idiomatiques et d'une qualité équivalente à celles en anglais.",
							},
							{
								summary:
									"Encourager les clubs et initiatives francophones et bilingues.",
							},
							{
								summary:
									"Défendre le maintien et l'expansion de l'offre de cours en français, y compris durant l'été.",
							},
						],
						closing: [
							"L'Université d'Ottawa est une institution bilingue, et notre syndicat étudiant doit refléter cette réalité.",
						],
					},
					{
						id: "student-democracy",
						title: "Une démocratie étudiante plus forte",
						icon: "🗳️",
						intro: [
							"Le syndicat étudiant doit appartenir aux étudiant·e·s, pas aux initié·e·s.",
							"Je renforcerai la transparence et la reddition de comptes démocratique en:",
						],
						points: [
							{
								summary:
									"Protéger l'indépendance du syndicat étudiant",
								detail: "Les étudiant·e·s financent leur syndicat et doivent en garder le contrôle. Je défendrai le droit des étudiant·e·s à décider démocratiquement du fonctionnement de leur syndicat, de l'utilisation des frais et des enjeux de représentation, sans ingérence politique des gouvernements, de l'université ou d'administrations non élues. Cela inclut protéger le syndicat contre les tentatives d'imposer des frais sans approbation démocratique, de dissoudre des services ou d'annuler des décisions étudiantes.",
							},
							{
								summary:
									"Rendre l'information publique vraiment publique",
								detail: "Tout ce qui doit être public doit être facile à trouver et réellement visible. Les étudiant·e·s ne devraient pas avoir à fouiller des canaux cachés ou réservés aux initié·e·s pour comprendre les actions de leur syndicat.",
							},
							{
								summary:
									"Créer un caucus de gouvernance étudiante",
								detail: "Des étudiant·e·s siègent déjà au Sénat, au Bureau des gouverneurs et aux conseils de faculté. Mais trop souvent, ces personnes travaillent en silos. Je créerai un caucus de gouvernance étudiante pour coordonner la représentation étudiante à travers l'université, afin de partager l'information entre le Sénat, le Conseil et les leaders étudiants, préparer des propositions conjointes, suivre les décisions qui touchent les étudiant·e·s et renforcer la reddition de comptes envers la population étudiante.",
							},
							{
								summary:
									"Réunions ouvertes, droit de parole des délégué·e·s et forums réguliers",
								detail: "Les étudiant·e·s doivent disposer de moyens clairs et accessibles pour participer aux décisions. Je soutiendrai un système de droit de parole des délégué·e·s en réunion, ainsi que des assemblées publiques et forums ouverts réguliers.",
							},
							{
								summary:
									"Rendre les représentant·e·s étudiant·e·s responsables devant les étudiant·e·s",
								detail: "Les étudiant·e·s qui siègent au Sénat et au Bureau des gouverneurs doivent rendre des comptes à celles et ceux qu'ils représentent. J'exigerai que les représentant·e·s étudiant·e·s présentent des mises à jour aux Assemblées générales, participent à des rencontres de coordination régulières et publient des synthèses des décisions de gouvernance importantes lorsque la confidentialité le permet.",
							},
							{
								summary:
									"Protéger la capacité de représentation des élu·e·s",
								detail: "Les représentant·e·s élu·e·s doivent pouvoir défendre ouvertement les étudiant·e·s qui les ont élu·e·s. Le devoir fiduciaire doit protéger les intérêts étudiants, pas être utilisé pour faire taire une représentation légitime.",
							},
							{
								summary:
									"Rétablir des mécanismes d'appel équitables et des protections procédurales",
								detail: "Les étudiant·e·s doivent avoir une voie claire pour contester les décisions qui les touchent. Je renforcerai l'indépendance et l'accessibilité du Comité d'appel en simplifiant le processus, en réduisant les délais, en publiant les décisions pour plus de transparence, et en assurant l'autonomie du comité par rapport au leadership politique.",
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
							"Le leadership, c'est la responsabilité.",
							"Dans mes engagements en milieu étudiant, j'ai constamment poussé pour plus de transparence et une meilleure gouvernance.",
							"J'ai:",
						],
						points: [
							{
								summary:
									"Géré des budgets d'organismes sans but lucratif",
							},
							{
								summary:
									"Développé des outils de surveillance financière",
							},
							{
								summary:
									"Soulevé des enjeux de gouvernance financière",
							},
							{
								summary:
									"Plaidé pour une transparence accrue dans les institutions étudiantes",
							},
							{
								summary:
									"Mettre fin aux dépenses juridiques inutiles",
								detail: "Les services juridiques doivent servir à protéger les étudiant·e·s et à défendre leurs intérêts, pas à les combattre. Je réviserai l'utilisation des ressources juridiques du SÉUO et redirigerai les dépenses vers des services qui soutiennent directement les étudiant·e·s, comme les cliniques de droits locatifs et l'appui aux appels académiques.",
							},
							{
								summary:
									"Privilégier les outils numériques détenus par le syndicat",
								detail: "Le SÉUO a dépensé des sommes importantes en plateformes tierces qui ne livrent pas une valeur adéquate. Je prioriserai la construction et la maintenance d'une infrastructure numérique durable, détenue par le syndicat, qui sert mieux les étudiant·e·s et coûte moins cher à long terme.",
							},
							{
								summary:
									"Favoriser des relations de travail pragmatiques et collaboratives",
								detail: "Une approche collaborative des relations de travail protège les services dont dépendent les étudiant·e·s tout en respectant les travailleur·euse·s. Je travaillerai à réduire les coûts de griefs inutiles grâce à une communication proactive et des pratiques de travail justes.",
							},
						],
						closing: [
							"J'ai aussi fait des erreurs et j'en ai pris la responsabilité.",
							"Le leadership ne consiste pas à prétendre être parfait. Il repose sur la responsabilisation, la transparence et la progression.",
							"Le syndicat étudiant doit rester concentré sur les enjeux que les étudiant·e·s lui confient: abordabilité, services, représentation, vie de campus et défense d'intérêts.",
						],
					},
					{
						id: "vision",
						title: "La vision",
						icon: "✨",
						intro: ["Les étudiant·e·s méritent un syndicat qui:"],
						points: [
							{ summary: "Se bat pour elles et eux" },
							{
								summary:
									"Gère leur argent de façon responsable",
							},
							{
								summary:
									"Livre les services pour lesquels elles et ils votent",
							},
							{ summary: "Les représente efficacement" },
							{ summary: "Fonctionne avec transparence" },
						],
						closing: [
							"Le Syndicat étudiant de l'Université d'Ottawa peut être une institution puissante.",
							"Mais seulement si on le construit ainsi.",
							"Il est temps de changer.",
						],
					},
				],
				suggestAria: "Proposer une idée de plateforme",
				suggestHeading: "Vous avez une idée?",
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
						question:
							"Pourquoi les étudiant·e·s devraient-ils se soucier de cette élection?",
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
					"Envoyez-la et elle pourrait être ajoutée à cette page.",
			},
			about: {
				title: "À propos de moi",
				description:
					"Découvrez qui est Daniel, pourquoi il se présente et l'expérience qu'il apporte pour diriger le SÉUO.",
				heading: "À propos de moi",
				lead: "Étudiant bilingue en génie logiciel (CO-OP) à l'Université d'Ottawa, originaire de la région d'Ottawa.",
				personalIntro: [
					"Daniel Thorp est un étudiant bilingue en génie logiciel à l'Université d'Ottawa. Il a grandi à Chelsea, au Québec, et a passé la majeure partie de sa vie dans la région d'Ottawa.",
					"Il s'est impliqué très tôt dans la vie étudiante et a depuis occupé des rôles de leadership au SÉUO, à la Société des étudiants en génie et dans des organismes sans but lucratif.",
					"Daniel se présente à la présidence du SÉUO parce que les étudiant·e·s méritent un syndicat qui fonctionne, qui défend leurs intérêts et qui rend des comptes.",
				],
				whyRunning: {
					heading: "Pourquoi je me présente",
					body: [
						"Chaque étudiant·e de premier cycle à uOttawa paie des frais au Syndicat étudiant. Cet argent devrait financer des services, de la défense d'intérêts et des occasions concrètes.",
						"Trop souvent, le syndicat peine à respecter ces engagements. Au cours des dernières années, Daniel a travaillé de l'intérieur et a vu comment une gouvernance faible et un manque de reddition de comptes nuisent aux étudiant·e·s.",
						"Il se présente à la présidence pour rebâtir un syndicat qui prend ses responsabilités au sérieux et qui livre des résultats concrets.",
					],
					priorities: [
						"Une vraie défense des coûts étudiants",
						"Transparence et responsabilité financière",
						"Des services qui fonctionnent vraiment",
						"Un syndicat qui représente tous les étudiant·e·s",
					],
				},
				sections: [
					{
						id: "vie-étudiante",
						icon: "🎒",
						title: "Vie étudiante sur le campus",
						intro: "L'expérience de Daniel ne se limite pas à la gouvernance. Il est aussi impliqué dans la vie étudiante au quotidien.",
						roles: [
							{
								title: "Implication sur le campus",
								period: "Depuis la première année",
								points: [
									"Guide de la semaine 101 avec la Société des étudiants en génie",
									"Soutien à des clubs et organisation d'événements étudiants",
									"Collaboration avec des groupes étudiants de plusieurs facultés",
									"Organisation d'ateliers, de vitrines de projets et d'activités de hackathon",
								],
							},
						],
					},
					{
						id: "uosu",
						icon: "🏛️",
						title: "Expérience avec le Syndicat étudiant",
						intro: "J'ai servi le syndicat étudiant comme administrateur élu et comme membre de l'exécutif.",
						roles: [
							{
								title: "Commissaire aux communications",
								period: "Nov 2023 - Avr 2024",
								points: [
									"Direction des communications pour plus de 40 000 étudiant·e·s via les réseaux sociaux, les infolettres et le site du SÉUO",
									"Direction des élections générales de 2024: ajout du vote en personne, résolution de problèmes de courriel avec les TI de l'université et création d'un suivi en temps réel",
									"Conception et déploiement du portail de vote en ligne utilisé pour les élections du SÉUO",
									"Présidence de l'embauche de la première ombuds du SÉUO et rédaction de la politique de prévention de la violence au travail",
									"Rédaction de politiques sur les prises de position et organisation de consultations publiques et assemblées citoyennes",
									"Coordination avec la Vie étudiante, les TI et les Installations pour aligner communications et opérations",
									"Revues d'accessibilité avec le Centre en accessibilité",
								],
							},
							{
								title: "Consultant en technologies de l'information",
								period: "Juin - Août 2024",
								points: [
									"Administration de Microsoft 365 et maintenance du site du SÉUO pour assurer une information étudiante exacte",
									"Recrutement et intégration du personnel TI et web (descriptions de poste, entrevues et recommandations d'embauche)",
								],
							},
							{
								title: "Directeur de génie",
								period: "Mai - Août 2023",
								points: [
									"Élu pour représenter les étudiants en génie au conseil d'administration du SÉUO (~40 000 membres)",
									"Leadership de réformes de politiques et de règlements adoptées par le conseil",
									"Formation externe en gouvernance d'entreprise et devoir fiduciaire",
								],
							},
						],
					},
					{
						id: "governance",
						icon: "⚖️",
						title: "Gouvernance du campus et leadership étudiant",
						intro: "J'ai présidé des conseils, rédigé des politiques et aidé à allouer des fonds.",
						roles: [
							{
								title: "VP interne - Société des étudiants en génie",
								period: "Mai - Sep 2025",
								points: [
									"Supervision de la gouvernance et de la conformité des sous-associations de la SEG",
									"Représentation auprès de la faculté sur les enjeux étudiants (espaces, expérience étudiante et prise de décision institutionnelle)",
								],
							},
							{
								title: "Président du conseil - Société des étudiants en génie",
								period: "Mai 2024 - Avr 2025",
								points: [
									"Présidence des réunions selon les règles de Robert pour assurer la clarté procédurale",
									"Modernisation de la gouvernance: amélioration des processus, de la documentation et des attentes de conformité",
									"Création du premier système centralisé de suivi de la reddition de comptes exécutive",
								],
							},
							{
								title: "Président du conseil - Fédération canadienne des étudiants en génie",
								period: "Mai - Août 2024",
								points: [
									"Présidence d'un conseil national et assurance de la conformité aux politiques et documents de gouvernance",
									"Organisation de la première réunion saisonnière en ligne de la FCEG et création de modèles d'ordres du jour bilingues",
								],
							},
							{
								title: "Membre du comité - Fonds de dotation en génie",
								period: "Mai 2023 - Hiver 2025",
								points: [
									"Plus de 40 heures de délibération pour évaluer des propositions et des budgets d'initiatives étudiantes",
									"Contribution à l'allocation de plus de 400 000 $ à des initiatives  académiques, techniques et étudiantes",
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
									"Direction de l'incorporation d'un OBNL jeunesse en tech. Planification et exécution de Hack the Hill II - 826 participants, 113 projets et plus de 95 000 $ en commandites.",
							},
							{
								title: "Membre du conseil - OpenMedia",
								period: "Sep 2025 - présent",
								summary:
									"Gouvernance, surveillance financière et RH pour un organisme national défendant les droits numériques, la vie privée et un internet ouvert.",
							},
							{
								title: "Président et cofondateur - uOttawa Legal Hackers",
								period: "Oct 2024 - présent",
								summary:
									"Fondateur d'une organisation étudiante au croisement du droit, de la technologie et des politiques publiques. Organisation d'évenements sur les droits numériques, l'IA et les enjeux émergents.",
							},
							{
								title: "Rédacteur - Vie étudiante, Université d'Ottawa",
								period: "Jan 2026 - présent",
								summary:
									"Contribution à l'infolettre étudiante de uOttawa et maintien du contenu web sur Drupal.",
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
								period: "Sep 2022 - Avr 2027 (prévu)",
								summary:
									"Baccalauréat en sciences appliquées, génie logiciel (CO-OP). Bilingue (anglais/français).",
							},
						],
					},
				],
			},
		},
	},
} as const;
