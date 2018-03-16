module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': { // eslint-disable-line sort-keys
      features: {
        customMedia: {
          extensions: {
            '--phone': '(min-width: 576px)',
            '--tablet': '(min-width: 768px)',
            '--desktop': '(min-width: 992px)', // eslint-disable-line sort-keys
            '--large-desktop': '(min-width: 1200px)',
          },
        },
        customProperties: {
          preserve: true,
        }
      },
    },
    'postcss-browser-reporter': {}, // eslint-disable-line sort-keys
  },
};
