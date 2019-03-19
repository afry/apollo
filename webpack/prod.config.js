/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  externals: {
    classnames: 'classnames',
    'prop-types': 'prop-types',
    react: 'react',
    'react-dom': 'react-dom',
  },
  mode: 'production',
  output: {
    filename: 'js/apollo.js',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
});
