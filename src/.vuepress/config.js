const { description } = require('../../package.json');
module.exports = {
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#title
	 */
	title: 'ITVSH Design System Dokumentation',
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#description
	 */
	description: description,
	theme: 'nc-provider',
	dest: 'public',
	/**
	 * Extra tags to be injected to the page HTML `<head>`
	 *
	 * ref：https://v1.vuepress.vuejs.org/config/#head
	 */
	head: [
		['link', { rel: 'icon', href: '/img/logo.png' }],
		['link', { rel: 'manifest', href: '/manifest.json', crossOrigin: 'use-credentials' }],
		['meta', { name: 'theme-color', content: '#3A78B8' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
		['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3A78B8' }],
		[
			'meta',
			{ name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' },
		],
		['meta', { name: 'msapplication-TileColor', content: '#000000' }],
		['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
		['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							// Prefer `dart-sass`
							implementation: require('sass'),
						},
					},
				],
			},
		],
	},
	locales: {
		// The key is the path for the locale to be nested under.
		// As a special case, the default locale can use '/' as its path.
		'/': {
			lang: 'de-DE', // this will be set as the lang attribute on <html>
			title: 'ITVSH Design System Dokumentation',
			description: description,
		},
	},
	plugins: [
		['@vuepress/plugin-back-to-top'],
		['@vuepress/plugin-medium-zoom'],
		[
			'@vuepress/pwa',
			{
				serviceWorker: true,
				popupComponent: 'SWUpdatePopup',
				updatePopup: {
					message: 'Neue Inhalte sind verfügbar.',
					buttonText: 'Aktualisieren',
				},
			},
		],
		[
			'@vuepress/search',
			{
				searchMaxSuggestions: 10,
			},
		],
		[
			'@vuepress/last-updated',
			{
				transformer: timestamp => timestamp,
			},
		],
		[
			'demo-block',
			{
				settings: {
					jsLib: ['https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js'],
					jsfiddle: false,
					codepen: true,
					horizontal: false,
				},
			},
		],
		[
			'seo',
			{
				siteTitle: (_, $site) => $site.title,
				title: $page => $page.title,
				description: $page => $page.frontmatter.description,
				author: (_, $site) => $site.themeConfig.author,
				tags: $page => $page.frontmatter.tags,
				twitterCard: _ => 'summary_large_image',
				type: $page =>
					['articles', 'posts', 'blog'].some(folder =>
						$page.regularPath.startsWith('/' + folder)
					)
						? 'article'
						: 'website',
				url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
				image: ($page, $site) =>
					$page.frontmatter.image &&
					(($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http')) ||
						'') + $page.frontmatter.image,
				publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
				modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
			},
		],
	],
	/**
	 * Theme configuration, here is the default theme configuration for VuePress.
	 *
	 * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
	 */
	themeConfig: {
		title: 'ITVSH Design System Dokumentation',
		repoLabel: 'Gitlab',
		repo: 'https://gitlab.nc-lab.de/nc/Design-System-Doku',
		editLinks: true,
		editLinkText: 'Hilf uns diese Seite zu verbessern!',
		docsBranch: 'main',
		docsDir: 'src',
		lastUpdated: 'Letze Änderungen',
		searchPlaceholder: 'Suche...',
		search: true,
		smoothScroll: true,
		navbar: false,
		displayAllHeaders: false,
		sidebar: [
			{
				title: 'Komponenten',
				collapsable: false,
				children: [
					{
						title: 'Einstieg',
						path: '/components/',
					},
					'components/links',
					'components/buttons',
					'components/text-styles',
				],
			},
			// {
			// 	title: 'Projekte',
			// 	collapsable: false,
			// 	children: [
			// 		{
			// 			title: 'ITVSH Komponenten',
			// 			collapsable: false,
			// 			children: ['projects/itvsh/'],
			// 		},
			// 		{
			// 			title: 'SH Hüttenerberge',
			// 			collapsable: false,
			// 			children: ['projects/itvsh/'],
			// 		},
			// 	],
			// },
		],
	},
};
