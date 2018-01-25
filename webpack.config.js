const path = require('path');
const cssnano = require('cssnano');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const ENV_PROD = process.env.NODE_ENV === 'production';

function getPlugins(prod) {
  if (prod) {
    return [
      new ExtractTextPlugin('css/apollo.min.css'),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.min\.css$/g,
        cssProcessor: cssnano,
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true,
      }),
      new UglifyJSPlugin({
        extractComments: true,
      }),
    ];
  }

  return [new ExtractTextPlugin('css/apollo.css')];
}

module.exports = {
  entry: './src/apollo.js',
  output: {
    filename: (ENV_PROD) ? 'js/apollo.min.js' : 'js/apollo.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
  plugins: getPlugins(ENV_PROD),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: ENV_PROD,
              },
            },
          ],
        }),
      },
    ],
  },
};

