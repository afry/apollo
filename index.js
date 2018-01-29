module.exports = (process.env.NODE_ENV === 'production') ?
  require('./dist/js/apollo.min.js') :
  require('./dist/js/apollo.js');
