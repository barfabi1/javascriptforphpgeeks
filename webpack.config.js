//Bez ./ require szuka corowej biblioteki w node_modules albo Webpacku
const path = require('path');

module.exports = {
  entry: './web/assets/js/RepLogApp.js',
  output: {
    path: path.resolve(__dirname, 'web', 'build'),
    filename: 'rep_log.js',
  }
};
