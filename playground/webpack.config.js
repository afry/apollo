const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'index.jsx'),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets'),
    publicPath: '/assets/',
  },
  devServer: {
    contentBase: path.resolve(__dirname),
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      '@afconsult/apollo': path.resolve(__dirname, '..', 'src'),
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: ['babel-loader'] },
      { test: /\.css$/, loader: 'css-loader' },
    ],
  },
};
