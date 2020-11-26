const numberFormats = require('../src/formats/numberFormats.js')
const dateTimeFormats = require('../src/formats/dateTimeFormats.js')
module.exports = {
  use: 'gridsome-plugin-i18n',
  options: {
    locales: ['en', 'fr'],
    pathAliases: {
      en: 'en',
      fr: 'fr',
    },
    fallbackLocale: 'en',
    defaultLocale: 'fr',
    numberFormats,
    dateTimeFormats,
  },
}
