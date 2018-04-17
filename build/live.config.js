const path = require('path')
const { SRC, DIST, ASSETS } = require('./paths')
const merge = require('webpack-merge')
const webpack = require('webpack')

module.exports = merge(require('./config.base.js'), {
  // We'll place webpack configuration for prod environment here
 output: {
    path: path.resolve(__dirname, '../public/react/live/bundle/dist/'),
    filename: "[name].bundle.js",
    publicPath: '/mobilerving/react/live/bundle/dist' //ASSETS
  },
    plugins: [
		  new webpack.DefinePlugin({
		  	'process.env.NODE_ENV': JSON.stringify('production')
		  }),
		  new webpack.optimize.UglifyJsPlugin()
	]	  
})

