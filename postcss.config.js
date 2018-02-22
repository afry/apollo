const autoprefixer = require('autoprefixer'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  plugins: {
    autoprefixer: autoprefixer({ browsers: ['last 2 versions', '> 5%', 'iOS >= 8'] }),
    'postcss-import': {},
    'postcss-cssnext': { // eslint-disable-line sort-keys
      browsers: ['last 2 versions', '> 5%']
    },
  },
};
