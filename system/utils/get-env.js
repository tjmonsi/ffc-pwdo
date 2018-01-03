const options = require('gulp-options');

module.exports = () => {
  let env = options.has('env') && options.get('env') ? options.get('env') : 'dev';
  return options.has('prod') ? 'prod' : env;
};
