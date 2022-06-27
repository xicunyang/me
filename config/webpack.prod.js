const { merge } = require('webpack-merge');
const path = require('path');
const webpackBase = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(webpackBase, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: 'https://me-7g8ouvub0ffe9fba-1301404888.tcloudbaseapp.com/',
    filename: '[name].[chunkhash:8].js',
  },
  cache: {
    type: 'filesystem'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        path.resolve(__dirname, '../public/favicon.ico')
      ]
    }),
    // new BundleAnalyzerPlugin()
  ]
});