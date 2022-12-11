export default function getCvData() {
	return {
		name: 'Ronald A. Richardson',
		location: 'Singapore - USA - Remote',
		email: 'me@ron.dev',
		phones: ['+65 9637 9222', '+1 704 303 8110'],
		github: 'roncodes',
		skills: [
			[
				'Business Development',
				'UI/UX for Digital Products',
				'Adobe Photoshop/ Illustrator/ Figma',
				'Robotics & Embedded Systems',
			],
			[
				'Desktop Software Development',
				'Mobile Application Development',
				'Web Application Development',
				'Package/ Library Development',
			],
			[
				'DevOps',
				'Amazon Web Services',
				'Docker/ Kubernetes',
				'Git/ Subversion',
			],
			[
				'Unit Testing',
				'Automated UI Testing',
				'QA',
				'CSS/ Stylesheet Processors',
			],
		],
		languages: [
			['C', 'C++', 'Rust', 'Javascript', 'PHP'],
			['Typescript', 'Dart', 'Java', 'Python'],
			['Lua', 'Scala', 'Groovy', 'Elixir'],
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
					'I designed and developed websites for local businesses and notable clients such as the Mayor of Huntersville, motivation speaker Tawana Williams, and Newbirth Charlotte baptist church.',
				],
			},
			{
				title: 'United States Marine Corps',
				role: 'Corporal',
				dates: [new Date('Aug 01, 2008'), new Date('Dec 01, 2014')],
				location: 'Charlotte, NC',
				highlights: [
					'As a Marine I operated in the combat operations center, I was responsible for tracking hundreds of Marines, convoys, and missions.',
					'I also participated in bulk fueling operations for mission-critical vehicles and served as a fire team leader, overseeing the completion of all necessary work and tasks for successful mission completion.',
				],
			},
			{
				title: 'Full Speed Marketing',
				role: 'Lead Developer',
				dates: [new Date('Jul 01, 2011'), new Date('Jul 01, 2012')],
				location: 'Charlotte, NC',
				highlights: [
					'I developed and released an original Spintax API/Class for Python and PHP, which is now used for marketing on hundreds of websites.',
					'I also created scripts and Wordpress Plugins to support SEO and marketing strategies, helping clients increase traffic and improve their rankings on Google, resulting in increased sales for clients.',
				],
			},
			{
				title: 'VUURR, Digital Agency',
				role: 'Lead Developer',
				dates: [new Date('Aug 01, 2012'), new Date('Dec 01, 2013')],
				location: 'Chandler, AZ',
				highlights: [
					'I have developed web applications for SMEs and enterprise companies, including notable clients such as Salesforce, Infusionsoft, Plivo, Shamrock Farms, and Authority Labs.',
					'I have also written several official SDKs for these companies, which are available on Github.',
					'In addition to leading technical consulting projects, I have used my SEO and marketing skills to help companies increase their online presence.',
				],
			},
			{
				title: 'Tango Card, Inc',
				role: 'Software Engineer',
				dates: [new Date('Jan 01, 2013'), new Date('Aug 01, 2014')],
				location: 'Seattle, WA',
				highlights: [
					'I assisted in the onboarding of over a hundred companies through the custom-built "Rewards Genius" platform, which has now become Tango Card\'s premier offering.',
					'I designed and developed the frontend and backend for the Rewards Genius platform, as well as internal tools to improve efficiency for the engineering team.',
				],
			},
			{
				title: 'Rarbuilt, LLC',
				role: 'Software Engineer/ Consultant',
				dates: [new Date('Oct 01, 2014'), new Date('May 01, 2017')],
				location: 'Seattle, WA/ Remote',
				highlights: [
					'I have helped consult numerous SME companies and professionals on scaling their business with software solutions. I have also developed and designed web applications for businesses through the customer onboarding phase.',
				],
			},
			{
				title: 'TRAFYK/ Dial Digits',
				role: 'Lead Software Engineer/ Consultant',
				dates: [new Date('Dec 01, 2015'), new Date('May 01, 2017')],
				location: 'Seattle, WA/ Remote',
				highlights: [
					"I worked with the head of Google's Telephony Platform to develop a custom Freeswitch solution to handle and route hundreds of thousands of phone calls.",
					'I designed and developed the Dial Digits web application, which is used for configuring Freeswitch, managing call logs, and viewing reports. I also scaled the Freeswitch infrastructure and web application to handle high call volumes, resulting in company revenue reaching millions of dollars.',
				],
			},
			{
				title: 'Ebazaa Pte Ltd',
				role: 'CTO',
				dates: [new Date('Dec 01, 2016'), new Date('Dec 01, 2017')],
				location: 'Singapore',
				highlights: [
					'I developed an ecommerce fulfilment system for the SE Asia and Central Asia regions. I onboarded and developed SOPs for existing ecommerce companies to provide end-to-end order fulfilment.',
					'As a team leader, I assisted with code reviews, interviews, and implemented CI/CD for the Ebazaa platform. I regularly communicated with the CEO and COO and provided technical updates to the team and investors.',
				],
			},
			{
				title: 'LinkHaul by LinkEffect (M) Sdn Bhd',
				role: 'Lead SWE/ Consultant',
				dates: [new Date('May 01, 2018'), new Date('June 01, 2021')],
				location: 'Port Klang, Malaysia - Singapore',
				highlights: [
					'I developed and built a freight container marketplace using Fleetbase as the development framework. I worked closely with the Port Klang Authority and Ministry of Transport to design and develop a port integrated system to reduce congestion and increase subcontract transactions between hauliers.',
					'I have a deep understanding of the end-to-end business of freight forwarding and haulage in the SE Asia region, and have consulted several haulier companies on using our digital solution to increase business.',
					'I conducted presentations with government organizations and assisted in integrating our solution into each port terminal. I also created and narrated the launch video for the LinkHaul system.',
				],
			},
			{
				title: 'Fleetbase Pte Ltd',
				role: 'Co-Founder/ CTO',
				dates: [new Date('May 01, 2018'), new Date()],
				location: 'Singapore',
				highlights: [
					'I bootstrapped and scaled Fleetbase to over half a million SGD in ARR.',
					'I designed and developed the Fleetbase platform and API, which is used by over 100 companies globally.',
					'I was awarded a grant from Singapore Enterprise to develop a bulk shipping platform in a joint venture, and all obligations were successfully met.',
				],
			},
		],
		education: [
			{
				school: 'Phillip O. Berry Academy of Technology',
				location: 'Charlotte, NC',
				dates: [new Date('Aug 01, 2006'), new Date('June 01, 2007')],
				study: null,
			},
			{
				school: 'Hopewell Highschool',
				location: 'Charlotte, NC',
				dates: [new Date('Aug 01, 2007'), new Date('June 01, 2009')],
				study: 'Highschool Diploma',
			},
			{
				school: 'University of Advancing Technology',
				location: 'Tempe, AZ',
				dates: [new Date('2012')],
				study: 'Robotics and Embedded Systems',
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
