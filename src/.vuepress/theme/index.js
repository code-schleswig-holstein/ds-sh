module.exports = {
  extend: '@vuepress/theme-default',
  globalLayout: '/layouts/GlobalLayout',
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
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale("de", localization).format('LL')
        return moment(timestamp).fromNow()
      }
    }
  ]
}
