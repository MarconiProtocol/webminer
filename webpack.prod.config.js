const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require("webpack");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  target: 'web',
  mode: 'production',
  optimization: {
    concatenateModules: true,
    nodeEnv: 'production',
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false,
        parallel: true,
        cache: true,
        uglifyOptions: {
          mangle: true,
          compress: {
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true
          },
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          assetNameRegExp: /\.optimize\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
          },
        }
      })
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/html/index.html',
      filename: './index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    }),
    new CompressionPlugin({
      deleteOriginalAssets: true,
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
});
