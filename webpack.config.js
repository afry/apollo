const path = require('path');
const cssnano = require('cssnano');
const postcssprefixer = require('postcss-prefixer');
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
          loader: [
            'babel-loader',
            'react-classname-prefix-loader?prefix=Apollo'
          ],
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
                options: { importLoaders: 1 },
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: [
                    postcssprefixer({
                      prefix: 'Apollo-',
                      ignore: [''], // eslint-disable-line
                    }),
                  ],
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
