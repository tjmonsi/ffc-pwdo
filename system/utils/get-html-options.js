const path = require('path');
const getConfig = require('./get-config');
const smallprintrc = require('../../.smallprintrc');

module.exports = (env, file) => {
  const minify = env === 'prod'
    ? {
      caseSensitive: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      minifyCSS: true,
      minifyJS: true,
      preserveLineBreaks: true,
      removeComments: true
    }
    : false;

    // console.log(getConfig())

  return {
    template: path.resolve(__dirname, '../../app', smallprintrc.source.html[file]),
    inject: false,
    filename: `${file}.html`,
    minify,
    getConfig,
    env
  };
};
