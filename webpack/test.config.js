/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: './playground',
  },
  devtool: 'inline-source-map',
  entry: ['react-hot-loader/patch', './playground/index.jsx'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './playground/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
});
