module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-media': { // eslint-disable-line sort-keys
      extensions: {
        '--phone': '(min-width: 576px)',
        '--tablet': '(min-width: 768px)',
        '--desktop': '(min-width: 992px)', // eslint-disable-line sort-keys
        '--large-desktop': '(min-width: 1200px)',
      }
    },
    'postcss-preset-env': {
      features: {
        customProperties: {
          preserve: true,
          variables: {
            '--black': '#1E1E1E',
            '--charcoal': '#505050',
            '--dark-gray': '#A3A3A3',
            '--faded-blue': '#D3E1EB',
            '--faded-light-blue': '#EDF3F7',
            '--green-hover-status': '#399C73',
            '--green-status': '#39B983',
            '--light-smoke': '#F6F6F6',
            '--marble': '#F0F0F0',
            '--misty': '#C8C8C8',
            '--one-blue': '#025FAE',
            '--one-dark-blue': '#08478E',
            '--one-darkest-blue': '#172137',
            '--one-light-blue': '#20A3E8',
            '--red-hover-status': '#B43B3B',
            '--red-status': '#D14D4D',
            '--stone': '#7C7C7C',
            '--white': '#FFFFFF',
            '--yellow-hover-status': '#EBAD62',
            '--yellow-status': '#F7C473',
            '--system-fonts': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', // eslint-disable-line sort-keys, max-len
          }
        }
      },
      stage: 0,
    },
    'postcss-browser-reporter': {}, // eslint-disable-line sort-keys
  },
};
