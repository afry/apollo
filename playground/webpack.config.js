const path = require('path');
const webpack = require('webpack');
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname),
  },
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'index.jsx'),
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: ['babel-loader'],
        test: /\.(js|jsx)$/,
      },
      {
        loader: combineLoaders([
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            query: {
              localIdentName: '[name]__[local]__[hash:base64:5]',
              modules: true,
            },
          },
        ]),
        test: /\.css$/,
      },
    ],
  },
  output: {
    filename: 'apollo.js',
    path: path.resolve(__dirname, 'assets'),
    publicPath: '/assets/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      '@afconsult/apollo': path.resolve(__dirname, '../src'),
    },
    extensions: ['.jsx', '.js', '.json'],
  },
};
