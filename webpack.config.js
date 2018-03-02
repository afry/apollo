const path = require('path');
const cssnano = require('cssnano');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env) => {
  const isDevBuild = !(env && env.prod);

  return {
    entry: './src/index.js',
    module: {
      loaders: [
        {
          exclude: /node_modules/,
          loader: ['babel-loader'],
          test: /\.js(x)$/,
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
                  minimize: false,
                  modules: true,
                  sourceMap: true,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  minimize: false,
                  sourceMap: true,
                },
              },
            ],
          }),
        },
      ],
    },
    output: {
      filename: (isDevBuild) ? 'js/apollo.js' : 'js/apollo.min.js',
      libraryTarget: 'umd',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: (isDevBuild) ? [
      new ExtractTextPlugin('css/apollo.css')
    ] : [
      new ExtractTextPlugin('css/apollo.min.css'),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.min\.css$/g,
        canPrint: true,
        cssProcessor: cssnano,
        cssProcessorOptions: { discardComments: { removeAll: true } },
      }),
      new UglifyJSPlugin({
        extractComments: true,
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};
