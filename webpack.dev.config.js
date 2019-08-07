const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.js']
  },
  mode: 'development',
  target: 'web',
  devtool: '#source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/html/index.html",
      filename: "./index.html",
      excludeChunks: [ 'server' ]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  }
})
