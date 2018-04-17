const path = require('path')
const { SRC, DIST, ASSETS } = require('./paths')
const webpack = require('webpack')

const HtmlPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  // we will place webpack configuration for all enviroments here
  entry: {
              // blog:  path.resolve(__dirname, '../application/views/react_view/blog/Blog.jsx'),
              // home:  path.resolve(__dirname, '../application/views/react_view/home/Home.jsx'),
              // feedback: path.resolve(__dirname, '../application/views/react_view/feedback/_Feedback.jsx'),
              // language: path.resolve(__dirname, '../application/views/react_view/language/_language.jsx'),
              // SearchHtml: path.resolve(__dirname, '../application/views/react_view/search/SearchHtml.jsx'),
              // contactUs: path.resolve(__dirname, '../application/views/react_view/contactus/ContactUs.jsx'),
              // video: path.resolve(__dirname, '../application/views/react_view/video/Video.jsx'),
              // resorts: path.resolve(__dirname, '../application/views/react_view/resorts/ResortDetails.jsx'),
              // thingsToDo: path.resolve(__dirname, '../application/views/react_view/thingstodo/ThingsToDo.jsx'),
              // business: path.resolve(__dirname, '../application/views/react_view/business/Business.jsx'),
              buzz: path.resolve(__dirname, '../application/views/react_view/buzz/Buzz.jsx'),
              // faqProperty: path.resolve(__dirname, '../application/views/react_view/faq/FaqPreferred.jsx'),
              // article: path.resolve(__dirname, '../application/views/react_view/buzz/_Article.jsx'),
              // preferredInfo: path.resolve(__dirname, '../application/views/react_view/preferredinfo/PreferredInfo.jsx'),
              // preferredParks: path.resolve(__dirname, '../application/views/react_view/preferredparks/PreferredParks.jsx'),
              // buyanrv: path.resolve(__dirname, '../application/views/react_view/buyanrv/BuyAnRv.jsx'),
              // rvTripPlanner:  path.resolve(__dirname, '../application/views/react_view/rvtripplanner/RvTripPlanner.jsx'),
              // mysavedtrips: path.resolve(__dirname, '../application/views/react_view/mytripplanner/MyTripPlanner.jsx'),
              // currentLocation: path.resolve(__dirname, '../application/views/react_view/language/_currentLocation.jsx')


    // dashboardHome: path.resolve(__dirname, '../application/views/react_view/connect/dashboard/_dashboard.jsx'),
    // myAccount: path.resolve(__dirname, '../application/views/react_view/connect/account/_myAccount.jsx'),
    // myJournal: path.resolve(__dirname, '../application/views/react_view/connect/journal/_MyJournal.jsx'),
    // myReview: path.resolve(__dirname, '../application/views/react_view/connect/review/_MyReview.jsx'),
    // wishList: path.resolve(__dirname, '../application/views/react_view/connect/wishlist/_Wishlist.jsx'),
    // checkIn: path.resolve(__dirname, '../application/views/react_view/connect/checkin/_CheckIn.jsx'),
    // profile: path.resolve(__dirname, '../application/views/react_view/connect/profile/_Profile.jsx'),
    // myReservation: path.resolve(__dirname, '../application/views/react_view/connect/reservation/_MyReservation.jsx'),
    // messageInbox: path.resolve(__dirname, '../application/views/react_view/connect/message/_messageInbox.jsx'),
    // freinds: path.resolve(__dirname, '../application/views/react_view/connect/freinds/_Freinds.jsx'),
    // mysavedtrips: path.resolve(__dirname, '../application/views/react_view/connect/mysavedtrips/_MySavedTrips.jsx'),
    // thebuzzarticle: path.resolve(__dirname, '../application/views/react_view/thebuzzarticle/TheBuzzArticle.jsx'),
    // in_process: path.resolve(__dirname, '../application/views/react_view/sub_parts/InProcess.jsx'),
  },

  module: {
    rules: [
            { test: '/\.text$/', use: 'raw-loader' },
            { 
              test: /\.jsx$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets:  
              [ 
                "react",
                "es2015"  
              ], 
                  plugins: ['transform-runtime'],
                  //plugins: ['transform-runtime','transform-remove-console'],
                }
              }
            },
            { 
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets:  
              [ 
                "react",
                "es2015"   
              ], 
                  plugins: ['transform-runtime']
                }
              }
            },
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { test: /\.png$/, loader: "url-loader?limit=100000" },
          { test: /\.jpg$/, loader: "file-loader" },
          { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
              loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
          { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
              loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
              loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      ],
  },
   plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            Popper: ['popper.js', 'default'],
            "window.jQuery": "jquery"
        }),
        new UglifyJSPlugin({
            uglifyOptions: {
              ie8: true,
              ecma: 8,
              mangle: {
                properties: {
                  // mangle property options
                }
              },
              output: {
                comments: false,
                beautify: false,
              },
              compress: true,
              warnings: false
            }
          })
    ]

}


 