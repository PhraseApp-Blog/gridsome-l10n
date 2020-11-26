// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const i18n = require('./plugins/i18n')

module.exports = {
  siteName: 'Gridsome-i18n-demo',
  plugins: [i18n],
}
