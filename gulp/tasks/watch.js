'use strict';

var gulp = require('gulp');

var files = require('../config').files;

gulp.task('watch', function watch() {
  gulp.watch(files.js, ['styleguide']);
  return gulp.watch(files.styl, ['css-compile', 'styleguide']);
});
