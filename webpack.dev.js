/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  devServer: {
    contentBase: './playground',
  },
  devtool: 'inline-source-map',
  entry: './playground/index.jsx',
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
