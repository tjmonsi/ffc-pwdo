const gulp = require('gulp');
const del = require('del');
const path = require('path');

gulp.task('delete-destination', () => {
  const dest = path.resolve(__dirname, '../../public');
  return del(dest, {
    force: true
  });
});
