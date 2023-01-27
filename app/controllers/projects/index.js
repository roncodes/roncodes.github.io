import Controller from '@ember/controller';

export default class ProjectsIndexController extends Controller {
	projects = [
		{
			title: 'Fleetbase',
			slug: 'fleetbase',
			description:
				'Fleetbase is an API-first platform for developing logistics and supply-chain apps and services at blazing speeds.',
			logo_url:
				'https://camo.githubusercontent.com/71dd8d2ff033eb220e0f66d37ef2826b864d6dc747bd2911985b15190933d434/68747470733a2f2f666c622d6173736574732e73332e61702d736f757468656173742d312e616d617a6f6e6177732e636f6d2f7374617469632f666c656574626173652d6c6f676f2d7376672e737667',
			urls: {
				link: 'https://fleetbase.io/',
				github: 'https://github.com/fleetbase',
			},
			stack: [
				'Ember.js',
				'Ember Engines',
				'Leaflet.js',
				'Laravel',
				'SocketCluster.io',
				'OSRM Routing Engine',
				'AWS ECS',
				'AWS ElastiCache',
				'AWS ELB',
				'AWS RDS',
				'AWS SQS',
			],
			screenshots: [
				'https://user-images.githubusercontent.com/816371/214926258-465c1d6c-13b1-4e2b-90c3-33dd65f5f29d.png',
				'https://user-images.githubusercontent.com/816371/214926242-e043f443-ddbb-47b7-88c5-63c5e1597f3a.png',
				'https://user-images.githubusercontent.com/816371/215138105-449a4e50-f1e1-44da-801a-89af3c0e83fa.png',
				'https://user-images.githubusercontent.com/816371/215138110-7fd0a6a0-e84b-49a8-9e81-e43ba5c99d77.png',
				'https://user-images.githubusercontent.com/816371/215138113-5f928943-83e8-42ce-8f90-a8ef4506e036.png',
				'https://user-images.githubusercontent.com/816371/215141514-3bfbbd75-4088-4d63-8a4c-64009cab68a3.png',
			],
		},
		{
			title: 'OpsWiz',
			slug: 'opswiz',
			description:
				'OpsWiz is a enterprise-grade bulk shipping operations platform for oil & chemicals, which allows departments and teams to fulfil charterparty and timecharter obligations end-to-end.',
			logo_url: undefined,
			urls: {
				link: 'https://opswiz.io/',
			},
			stack: [
				'Ember.js',
				'Leaflet.js',
				'Laravel',
				'SocketCluster.io',
				'AIS',
				'AWS ECS',
				'AWS ElastiCache',
				'AWS ELB',
				'AWS RDS',
				'AWS SQS',
			],
			screenshots: [
				'https://user-images.githubusercontent.com/816371/214945507-db3e92a2-2e2e-42b2-8193-d5edc6f80d1c.png',
				'https://user-images.githubusercontent.com/816371/214945513-42b6bce6-aa38-4e79-a4c6-3fc4df2c8e95.png',
				'https://user-images.githubusercontent.com/816371/214945515-9dbac4d4-34dd-4620-b60b-0a44a8516b21.png',
				'https://user-images.githubusercontent.com/816371/214945518-14688d04-0715-416b-89bf-adafdbfb6a8e.png',
				'https://user-images.githubusercontent.com/816371/214945522-f3497650-aff0-40b6-8d53-ded5035b6dbc.png',
				'https://user-images.githubusercontent.com/816371/214946020-b38c6566-b146-4010-98a8-28d44f87472c.png',
				'https://user-images.githubusercontent.com/816371/215138090-8871bb2b-a2b2-45c4-b913-f80bae56382e.png',
				'https://user-images.githubusercontent.com/816371/215138098-f41a15ce-20f1-4d39-937e-d42bdbd9d857.png',
				'https://user-images.githubusercontent.com/816371/215138103-39cb0648-0021-4ade-a4b1-612f627f5efb.png',
			],
		},
		{
			title: 'Fixflo',
			slug: 'fixflo',
			description:
				'Fixflo uses RegEx and natural language processing to parse out ship fixtures into an editable and smart spreadsheet which can be filtered and used to generate fixture reports.',
			logo_url:
				'https://fixflo.pro/images/logo-horizontal-f4670de82e691061c85428e4a7fdce28.png',
			urls: {
				link: 'https://fixflo.pro/',
			},
			stack: [
				'Ember.js',
				'Leaflet.js',
				'Laravel',
				'AWS ECS',
				'AWS ElastiCache',
				'AWS ELB',
				'AWS RDS',
				'AWS SQS',
			],
			screenshots: [
				'https://user-images.githubusercontent.com/816371/214947898-27591663-f362-4502-bd5e-7f78e9de6c23.png',
				'https://user-images.githubusercontent.com/816371/214947904-80d6e5a4-2526-442b-ad4a-f950fdf2c6c6.png',
				'https://user-images.githubusercontent.com/816371/214947907-580c97ed-19e4-453f-9e0d-6838484bfa2a.png',
				'https://user-images.githubusercontent.com/816371/214947910-6364814e-be4c-46d8-a636-b4e3bd28ea43.png',
				'https://user-images.githubusercontent.com/816371/214947913-1b8901a6-83a8-49db-95a1-4ca6f3114bfb.png',
				'https://user-images.githubusercontent.com/816371/214947917-1c2457af-31fb-46a3-9a74-aea4c1e9481e.png',
			],
		},
		{
			title: 'DialDigits.com',
			slug: 'dialdigits',
			description:
				'DialDigits is a VOIP and SIP management platform for Freeswitch, which allows users to track and monitor 100s of calls per seconds and create telephony based rules and more for VOIP numbers.',
			logo_url:
				'https://bc-smith.dialdigits.com/images/logo-932158818ce3e9fa8ef07374d5d392f7.png',
			urls: {
				link: 'https://dialdigits.com/',
			},
			stack: [
				'Ember.js',
				'Laravel',
				'Lua',
				'Freeswitch',
				'MySQL',
				'PHP',
				'AWS SES',
			],
			screenshots: [
				'https://user-images.githubusercontent.com/816371/214952783-53c70564-f616-4ed1-bda3-499b15c2eb84.png',
				'https://user-images.githubusercontent.com/816371/214952787-a38c2c80-2659-4742-8311-d23fea3445bd.png',
				'https://user-images.githubusercontent.com/816371/214952789-38e9cede-49c5-48cd-916b-3f278d4246c0.png',
				'https://user-images.githubusercontent.com/816371/214952791-1d16c201-fcac-4957-98d1-01bfbc655301.png',
				'https://user-images.githubusercontent.com/816371/214952792-d0583fb0-2644-492f-8851-01bfb644c699.png',
				'https://user-images.githubusercontent.com/816371/214952796-09cb6b0e-4b15-47dd-bc16-d440fe04b063.png',
				'https://user-images.githubusercontent.com/816371/214952798-d66d7772-57a4-441b-8623-18662bb97352.png',
			],
		},
	];
}
