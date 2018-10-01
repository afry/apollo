module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-media': { // eslint-disable-line sort-keys
      extensions: {
        '--phone': '(min-width: 576px)',
        '--tablet': '(min-width: 768px)',
        '--desktop': '(min-width: 992px)', // eslint-disable-line sort-keys
        '--large-desktop': '(min-width: 1200px)',
      },
    },
    'postcss-preset-env': { // eslint-disable-line sort-keys
      stage: 0,
    },
    'postcss-custom-properties': { // eslint-disable-line sort-keys
      preserve: true,
      variables: {
        '--black': '#1e1e1e',
        '--charcoal': '#505050',
        '--cloud': '#dee6ec',
        '--danger': '#ce5757',
        '--danger-hover': '#b14a4a',
        '--dark-gray': '#a3a3a3',
        '--light-smoke': '#f6f6f6',
        '--marble': '#f0f0f0',
        '--misty': '#c8c8c8',
        '--primary': '#3d7796',
        '--primary-dark': '#32647f',
        '--primary-darkest': '#24495c',
        '--primary-light': '#6593ad',
        '--sky': '#c2d3e0',
        '--stone': '#7c7c7c',
        '--success': '#67a799',
        '--success-hover': '#5c9286',
        '--system-fonts': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', // eslint-disable-line sort-keys, max-len
        '--warning': '#f6ce8e',
        '--warning-hover': '#efbf72',
        '--white': '#ffffff',
      },
    },
    'postcss-browser-reporter': {}, // eslint-disable-line sort-keys
  },
};
