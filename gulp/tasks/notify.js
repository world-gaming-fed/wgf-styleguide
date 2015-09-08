'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');

gulp.task('notify', function() {
  return gulp.src('./server.js')
      .pipe(notify('Ready to refresh'));
});
