/* eslint-disable import/no-extraneous-dependencies */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {}
          }
        ]
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                localIdentName: 'apollo-[local]',
                minimize: true,
                modules: true,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/apollo.css'),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
