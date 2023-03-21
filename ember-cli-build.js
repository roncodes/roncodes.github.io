'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const StaticSiteJson = require('broccoli-static-site-json');
const funnel = require('broccoli-funnel');
const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
const tailwind = require('tailwindcss');

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

		multiIndex: {
			targets: [
				{
					outputPath: 'error.html',
				},
				{
					outputPath: '404.html',
				},
			],
		},

		'ember-fetch': {
			preferNative: true,
		},

		postcssOptions: {
			cacheInclude: [/.*\.(css|scss|hbs)$/, /.tailwind\.js$/],
			compile: {
				plugins: [postcssImport({ path: 'node_modules' }), autoprefixer, postcssPresetEnv({ stage: 1 }), tailwind('./tailwind.js')],
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

	app.import('node_modules/glightbox/dist/css/glightbox.min.css');

	return app.toTree([postsJson]);
};
