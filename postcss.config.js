const autoprefixer = require('autoprefixer'); // eslint-disable-line

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': { // eslint-disable-line sort-keys
      browsers: ['last 2 versions', '> 5%']
    },
  },
};
