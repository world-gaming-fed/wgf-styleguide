'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('node', function node() {
  return nodemon(
    {
      script: 'server.js'
    }
  )
    // .on('change', ['js-check', 'js-compile'])
  ;
});
