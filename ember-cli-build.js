'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const StaticSiteJson = require('broccoli-static-site-json');
const tailwind = require('tailwindcss');
const funnel = require('broccoli-funnel');

module.exports = function (defaults) {
	let app = new EmberApp(defaults, {
		storeConfigInMeta: false,

		fingerprint: {
			enabled: false,
		},

		outputPaths: {
			app: {
				html: 'index.html',
				css: {
					app: '/assets/ron.dev.css',
				},
				js: '/assets/ron.dev.js',
			},
		},

		'ember-fetch': {
			preferNative: true,
		},

		postcssOptions: {
			compile: {
				plugins: [
					{
						module: require('postcss-import'),
						options: {
							path: ['node_modules'],
						},
					},
					tailwind('./app/tailwind/tailwind.config.js'),
					require('autoprefixer'),
				],
			},
		},
	});

	// posts json api
	const postsJson = new StaticSiteJson('app/posts', {
		type: 'post',
		attributes: [
			'canonical',
			'created_at',
			'updated_at',
			'excerpt',
			'featured',
			'image',
			'imageMeta',
			'language',
			'meta',
			'page',
			'status',
			'title',
			'tags',
			'categories',
			'order',
			'uuid',
		],
		contentFolder: 'api/posts',
		collate: true,
	});

	// copy index.html to error.html for gh-pages fallback
	const indexFallback = funnel('app', {
		files: ['index.html'],
		getDestinationPath: (relativePath) => 'error.html',
	});

	return app.toTree([postsJson, indexFallback]);
};
