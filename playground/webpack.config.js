const path = require('path');
const webpack = require('webpack');
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'index.jsx'),
  ],
  output: {
    filename: 'apollo.js',
    path: path.resolve(__dirname, 'assets'),
    publicPath: '/assets/',
  },
  devServer: {
    contentBase: path.resolve(__dirname),
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      '@afconsult/apollo': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
        ]),
      },
    ],
  },
};
