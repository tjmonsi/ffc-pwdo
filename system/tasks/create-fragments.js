const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const createFragments = require('../utils/create-fragments');

/**
 * # Slush Task Create Routing File
 *
 * Creates/Overwrites the Routing file to be read by the webpack loader.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:create-routing
 * ```
 *
 * ## File:
 * [/tasks/creators/create-routing.js](../../../tasks/creators/create-routing.js)
 *
 */

gulp.task('create-fragments', (done) => {
  fs.writeFileSync(path.resolve(__dirname, '../../app/system/core/fragments/index.js'), createFragments(), 'utf8');
  done();
});
