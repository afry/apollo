/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  mode: 'development',
  output: {
    filename: 'js/apollo.js',
    libraryTarget: 'umd',
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        output: {
          beautify: true,
        },
      },
    }),
  ],
});
