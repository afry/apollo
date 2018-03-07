/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
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
    new UglifyJSPlugin({
      extractComments: true,
      sourceMap: true,
    }),
  ],
});
