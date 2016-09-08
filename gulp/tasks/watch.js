'use strict';

var gulp = require('gulp');

var files = require('../config').files;

gulp.task('watch', function watch() {
  gulp.watch(files.styl, ['css-compile'])
  gulp.watch([files.js, './src/main.css'], [/*'styleguide',*/ 'build-react']);
  return gulp.watch('./dist/index.html', ['notify']);
});
