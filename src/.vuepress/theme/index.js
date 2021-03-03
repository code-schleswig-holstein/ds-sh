module.exports = {
  extend: '@vuepress/theme-default',
  globalLayout: '/layouts/GlobalLayout',
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
}
