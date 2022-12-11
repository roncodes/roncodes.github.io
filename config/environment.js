'use strict';

module.exports = function (environment) {
	let ENV = {
		modulePrefix: 'personal',
		environment,
		rootURL: '/',
		locationType: 'auto',
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
			},
			EXTEND_PROTOTYPES: {
				// Prevent Ember Data from overriding Date.parse.
				Date: false,
			},
		},

		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
		},

		// set social link urls
		social: {
			github: 'https://github.com/roncodes',
			twitter: 'https://twitter.com/wreckitron28',
			twitch: 'https://www.twitch.tv/wreckitron28',
			youtube: 'https://www.youtube.com/channel/UCmM_EzTI4T7qxDc-YDiKkgw',
			instagram: 'https://www.instagram.com/wreckitron28',
			tiktok: '',
			facebook: '',
			linkedin: 'https://www.linkedin.com/in/ronald-a-richardson/',
			// deviantart: 'https://www.deviantart.com/ghosted28',
		},

		fontawesome: {
			defaultPrefix: 'fad',
		},
	};

	ENV['ember-meta'] = {
		description:
			'entrepreneur, software engineer, roboticist, adventurer, gamer',
		imgSrc: '/meta/favicon.png',
		siteName: 'ron.dev',
		title: 'ron.dev - ronald a. richardson - entrepreneur, software engineer, roboticist, adventurer, gamer',
		twitterUsername: '@WreckItRon28',
		url: 'https://ron.dev/',
	};

	ENV['ember-cli-markdown-resolver'] = {
		folders: {
			posts: 'app/posts',
		},
	};

	if (environment === 'development') {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
		ENV.APP.autoboot = false;
	}

	if (environment === 'production') {
		// here you can enable a production-specific feature
	}

	return ENV;
};
