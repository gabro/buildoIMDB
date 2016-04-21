var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  resolve: {
	    extensions: ['', '.js', '.jsx', '.scss'],
	    alias: {
	        //'es6-promise': path.join(folders.NPM, 'es6-promise', 'es6-promise.js'),
	        //'fetch': path.join(folders.NPM, 'whatwg-fetch', 'fetch.js'),
	    }
	},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
	    Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
	    fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
	})
  ],
  module: {
    loaders: [
      {
         test: /\.css$/,
         loader: "style-loader!css-loader"
      },
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader' },
      {
         test: /\.js$/,
         loaders: ['react-hot', 'babel'],
         include: path.join(__dirname, 'src')
      }
   ]
  }
};
