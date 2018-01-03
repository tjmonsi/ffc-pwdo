const gulp = require('gulp');
const fs = require('fs');
const path = require('path');

gulp.task('create-destination', (done) => {
  const dest = path.resolve(__dirname, '../../public');
  if (!fs.existsSync(path.resolve(__dirname, '../../public'))) {
    fs.mkdirSync(path.resolve(__dirname, '../../public'));
  }
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }
  done();
});
