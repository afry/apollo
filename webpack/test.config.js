/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./base.config.js');

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
  ],
});
