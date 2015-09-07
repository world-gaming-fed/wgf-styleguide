'use strict';

var gulp = require('gulp');
var del = require('del');

gulp.task('build-clean', function(cb) {
  return del(['./lib', './dist'], cb);
});
