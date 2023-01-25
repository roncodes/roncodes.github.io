export default function getCvData() {
	return {
		name: 'Ronald A. Richardson',
		location: 'Singapore - USA - Remote',
		email: 'me@ron.dev',
		phones: ['+65 9637 9222', '+1 704 303 8110'],
		github: 'roncodes',
		about: '',
		skills: [
			[
				'Code/Programming',
				'UI/UX',
				'Robotics & Embedded Systems',
			],
			[
				'DevOps/CI/Terraform/AWS',
				'Docker/Kubernetes',
				'Git/Svn/Github/Gitlab',
			],
			[
				'Unit Testing/UI Testing/QA',
				'CSS/PostCSS/SASS'
			],
			[
				'REST Design',
				'API Documentation/Markdown'
			]
		],
		languages: [
			['C/C++', 'Rust', 'Javascript/Typescript/Ember.js'],
			['PHP/Laravel/Composer', 'Groovy/Grails', 'Java/Spring'],
			['Dart/Flutter', 'Python', 'Lua'],
			['Elixir', 'SQL', 'RegEx']
		],
		frameworks: [
			'React/ React Native',
			'Flutter',
			'Ember.js',
			'Laravel',
			'Grails',
			'Freeswitch',
		],
		experience: [
			{
				title: 'Freelance',
				role: 'Web Developer',
				dates: [new Date('Feb 01, 2005'), new Date('June 01, 2008')],
				location: 'Charlotte, NC',
				highlights: [
					'Designed and developed Wordpress websites while in high school for local businesses and notable clients such as the Mayor of Huntersville, motivation speaker Tawana Williams, and Newbirth Charlotte baptist church.',
				],
			},
			{
				title: 'United States Marine Corps',
				role: 'Corporal',
				dates: [new Date('Aug 01, 2008'), new Date('Dec 01, 2016')],
				location: 'Charlotte, NC',
				highlights: [
					'Served honourably with three different duty stations across the continental U.S. over 6 years (CLB-23, BULK FUEL CO C - 6TH ESB, 4TH MAINT BN) as 0111.',
					'Managed a fire team of 3 Marines, overseeing responsibilities, tracking performance, and awarding commendations.',
					'Assisted in combat operations center with tracking hundreds of Marines, in addition to tracking convoys and providing radio for missions.'
				],
			},
			{
				title: 'Full Speed Marketing',
				role: 'Lead Developer',
				dates: [new Date('Jul 01, 2011'), new Date('Jul 01, 2012')],
				location: 'Charlotte, NC',
				highlights: [
					'Developed utility scripts in Python and PHP to automate and support SEO tasks for clients, and also developed custom Wordpress plugins.',
					'Developed and launched a Spintax API for both Python and PHP, now widely used in content generation on the web.',
					'Developed, tested, debugged, and maintained CodeIgniter based PHP + MySQL web application which could be used to generate hundreds of thousands websites based on SEO criteria such as postal codes.',
				],
			},
			{
				title: 'VUURR, Digital Agency',
				role: 'Lead Developer',
				dates: [new Date('Aug 01, 2012'), new Date('Dec 01, 2013')],
				location: 'Chandler, AZ',
				highlights: [
					'Developed PHP based web applications for SMEs and enterprise companies, including notable clients Salesforce, Infusionsoft, Plivo, Shamrock Farms, and Authority Labs.',
					'Developed and published the official Python SDK for Infusionsoft, the Plivo PHP SDK, and a search ranking utility for Authority Labs.',
					'Worked in cohesion with the developer team for the planning, development, and maintenance of client projects.',
				],
			},
			{
				title: 'Tango Card, Inc',
				role: 'Software Engineer',
				dates: [new Date('Jan 01, 2013'), new Date('Aug 01, 2014')],
				location: 'Seattle, WA',
				highlights: [
					'Lead frontend development for the flagship product and platform Rewards Genius ®, which once launched assisted in the onboarding of thousands of companies globally.',
					'Designed, developed, documented and maintained internal tool for logging written in Groovy/Grails which enabled easier error and exception logging and tracking via HTTP.',
					'Represented engineering team at AWS re:Invent conference in which with my participation I was able to recommend best practices and services for Tango Card\'s AWS stack.',
				],
			},
			{
				title: 'Rarbuilt, LLC',
				role: 'Software Engineer/ Consultant',
				dates: [new Date('Oct 01, 2014'), new Date('May 01, 2017')],
				location: 'Seattle, WA/ Remote',
				highlights: [
					'Provided software development consultation for numerous SME and professionals throughout the PNW region to assist in digital product planning, development and maintenance.',
					'Designed, developed, debugged and maintained 5+ web applications written with Ember.js and Laravel for clients.',
					'Funded and hosted free weekly coding classes to local community of Olympia, WA (under Grindlab, LLC) exploring new and experimental languages and concepts at the time such as Elixir.'
				],
			},
			{
				title: 'TRAFYK/ DialDigits.com',
				role: 'Lead Software Engineer/ Consultant',
				dates: [new Date('Dec 01, 2015'), new Date('May 01, 2017')],
				location: 'Seattle, WA/ Remote',
				highlights: [
					'Coordinated with the head of Google\'s Telephony Platform to develop a custom Freeswitch service written and configured with XML, Lua, and PHP to handle and route hundreds of thousands of phone calls via VOIP.',
					'Designed, developed, debugged, documented and maintained the Dial Digits web application written in Ember.js and Laravel; which is used for configuring Freeswitch, managing call logs, and viewing reports.',
					'Optimized and scaled freeswitch service and web application infrastructure to handle high call volumes (100 calls per second) resulting in company revenue reaching millions of dollars.'
				],
			},
			{
				title: 'Ebazaa Pte Ltd',
				role: 'CTO',
				dates: [new Date('Sep 01, 2017'), new Date('Dec 01, 2017')],
				location: 'Singapore',
				highlights: [
					'Designed, developed, tested and implemented an ecommerce fulfilment system for the south east asia region written in Ember.js and Laravel; which was used in partner warehouses to optimize order fulfilment.',
					'Designed, developed and published on-demand ordering mobile app (Zengora) written in Ember.js + Cordova and published to iOS App Store and Google Play.',
					'Maintained daily communication and updates with executive team, participated in code reviews, candidate interviews, and implemented CI/CD for the Ebazaa platform.',
				],
			},
			{
				title: 'LinkHaul by LinkEffect (M) Sdn Bhd',
				role: 'Lead SWE/ Consultant',
				dates: [new Date('May 01, 2018'), new Date('June 01, 2021')],
				location: 'Port Klang, Malaysia - Singapore',
				highlights: [
					'Developed, designed and launched a freight container marketplace using Ember.js, Laravel, and Fleetbase, while working closely with the Port Klang Authority and Ministry of Transport to design and develop a port integrated system to reduce congestion and increase subcontract transactions between hauliers.',
					'Participated in planning and implementation for core integrations such as the PKA ETP & Gatepass system, CargoMove API, and PKA Northport systems; utilizing C#, and PHP for these integrations.',
					'Conducted demo presentations with port authorities, hauliers and logistics SME\'s as well as maintainted documentation, guides, and media materials for onboarding to Linkhaul.',
					'Developed and published the Linkhaul driver app written using React Native + SocketCluster + JS which enabled QR code based container status updates and real-time tracking of drivers.',
				],
			},
			{
				title: 'Fleetbase Pte Ltd',
				role: 'Co-Founder/ CTO',
				dates: [new Date('May 01, 2018'), new Date()],
				location: 'Singapore',
				highlights: [
					'Founded Fleetbase as a API based web service for developing logistics and supply chain services and integrations, which is currently utilized by 100+ companies globally.',
					'Designed, developed, debug, and maintain open-source and internal distributed core services written in PHP as well as maintain the frontend console and core frontend extensions written in Ember.js + Javascript/Typescript.',
					'Wrote and published the official API documentation, as well as maintain Fleetbase SDK codebases and releases on Github. Designed, developed, documented and maintain the open-source Fleetbase Storefront mobile application written in React Native + Javascript with over 50 stars on Github.',
					'Provisioned infrastructure and services using Terragrunt and Terraform for AWS services like ECS, ELB, RDS, S3/Cloudfront, and ElastiCache. I also used natural language processing for document parsing. Additionally, I helped plan, integrate, and set up web services for supply chain and logistics for small and large business clients.',
					'Awarded $300k+ grant from Singapore Enterprise which was used to design and develop a oil & chemicals bulk shipping platform for charterparties and timecharters covering commercial, ops, finance, claims and reporting.'
				],
			},
		],
		education: [
			{
				school: 'University of Advancing Technology',
				location: 'Tempe, AZ',
				dates: [new Date('May 2011'), new Date('2013')],
				study: 'B.S. Robotics and Embedded Systems',
				highlights: [
					'Awarded the Ray Kurzweil Scholarship.',
					'Withdrew after 4 semesters for military service reasons.'
				]
			},
		],
		projects: [
			{
				name: 'Horror Movie Night',
				description:
					"Horror Movie Night or HMN is a mobile app and community for horror enthusiast, the core feature of HMN is to recommend a scary horror movie based on the users mood. Since it's debut HMN has grown to over 3,000 active users between Play Store and Apple App Store.",
				url: 'https://horrormovienight.app',
				version: 'v1',
				status: 'Active',
			},
			{
				name: 'AR Net',
				description:
					'AR Net is a REST API based augmented reality network, with an open public API users are able to publish 3D objects to the physical world using GeoJSON. Additionally there is an open source app which allows users to create "worlds" and publish objects to the AR Net.',
				url: 'https://github.com/cybereye-digital',
				version: 'v1',
				status: 'Paused',
			},
			{
				name: 'Cloudrealms',
				description:
					'Cloudrealms is javascript library for developing web based RPG and MMORPG games, the engine is capable of generating tile based game canvas and handling animations, additionally able to handle rpg game mechanics with both promise and event based flow.',
				url: 'https://github.com/cloudrealmsrpg/cloudrealms.js',
				version: 'v2',
				status: 'Paused',
			},
		],
	};
}
