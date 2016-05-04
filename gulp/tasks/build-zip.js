'use strict';
var gulp = require('gulp');
var version = require('../../package.json').version;
var runSequence = require('run-sequence');
var del = require('del');
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');

gulp.task('build-zip', function(done) {
  runSequence(
    [ 'copy-src-to-zip', 'copy-lib-to-zip', 'copy-other-files' ],
    'compress-zip',
    // 'delete-zip-folder',
    done
  );
});

gulp.task('copy-src-to-zip', function() {
  return gulp.src('./src/**/*')
    .pipe(gulp.dest('./zip/src'))
  ;
});

gulp.task('copy-lib-to-zip', function() {
  return gulp.src('./lib/**/*')
    .pipe(gulp.dest('./zip/lib'))
  ;
});

gulp.task('copy-other-files', function() {
  return gulp.src([ './package.json', './index.js', 'README.md' ])
    .pipe(gulp.dest('./zip'))
  ;
});

gulp.task('delete-zip-folder', function(cb) {
  return del([ './zip' ], cb);
});

gulp.task('compress-zip', function() {
  gulp.src([
    './zip/*',
    './zip/**/*'
  ])
    .pipe(tar('v' + version + '.tar'))
    .pipe(gzip())
    .pipe(gulp.dest('./'))
  ;
});
