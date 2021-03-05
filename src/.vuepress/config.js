const {description} = require('../../package.json')
module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'ITVSH Design System Dokumentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  theme: "nc-provider",
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}],
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['meta', {name: 'theme-color', content: '#3A78B8'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', {rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png'}],
    ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3A78B8'}],
    ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
    ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
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
      description: description
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/pwa', {
      serviceWorker: true,
      popupComponent: 'SWUpdatePopup',
      updatePopup: {
        message: "Neue Inhalte sind verfügbar.",
        buttonText: "Aktualisieren"
      }
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/last-updated',
      {
        transformer: timestamp => timestamp
      }]
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
    docsDir:'src',
    lastUpdated: 'Letze Änderungen',
    searchPlaceholder: 'Suche...',
    search: true,
    smoothScroll: true,
    navbar: false,
    displayAllHeaders: true,
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        children: [
          ['/introduction/', 'Initialisierung'],
        ]
      },
      {
        title: 'Komponenten',
        collapsable: false,
        children: [
          ['/components/', 'Komponenten'],
        ]}
    ]
  }
}