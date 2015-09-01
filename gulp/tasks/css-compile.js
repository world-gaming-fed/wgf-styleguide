'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var postcss = require('gulp-postcss');
var lost = require('lost');
var minifyCss = require('gulp-minify-css');

var entryFile = require('../config/').entryFile;

gulp.task('css-compile', function cssCompile() {
  return gulp
    .src(entryFile.styl)
    .pipe(plumber())
    .pipe(stylus({
      'include css': true,
      sourcemap: {
        inline: true,
        sourceRoot: '.',
        basePath: '.'
      },
      compress: true
    }))
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(postcss([
      lost()
    ]))
    .pipe(autoprefixer())
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(sourcemaps.write('./source_mapping', {
      includeContent: false,
      sourceRoot: '.'
    }))
    .pipe(gulp.dest('./src'))
    .pipe(notify('Stylus compiled'));
});
