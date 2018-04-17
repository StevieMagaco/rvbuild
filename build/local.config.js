const path = require('path')
const merge = require('webpack-merge')
const { SRC, DIST, ASSETS } = require('./paths')

module.exports = merge(require('./config.base.js'), {
  watch: true,
  output: {
    path: path.resolve(__dirname, '../public/react/local/bundle/dist/'),
    filename: "[name].bundle.js",
    publicPath: ASSETS
  },
  // All webpack configuration for dev environment will go here
})