var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './js/app.js',
  output: {
    path: __dirname,
    filename: './app/js/bundle.js'
  },
  module: {
    loaders: [
      { test: /js\/\.css$/, loader: 'css-loader'},
      { test: /js\/\.js$/, loader: 'babel-loader',
        query: {
        presets: ['es2015','stage-0'],
        cacheDirectory: true
        } 
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'node_modules/lodash/lodash.min.js', to: 'app/js' },
    ])
  ]
};
