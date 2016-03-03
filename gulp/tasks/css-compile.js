'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var postcss = require('gulp-postcss');
var lost = require('lost');
var cleanCSS = require('gulp-clean-css');

var entryFile = require('../config/').entryFile;

gulp.task('css-compile', function cssCompile() {
  return gulp
    .src(entryFile.styl)
    .pipe(plumber())
    .pipe(stylus({
      'include css': true,
      sourcemap: {
        inline: global.ENV === 'production',
        sourceRoot: '.',
        basePath: '.'
      },
      compress: global.ENV === 'production'
    }))
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(postcss([
      lost()
    ]))
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write('./source_mapping', {
      includeContent: true,
      sourceRoot: '.',
      sourceMappingURLPrefix: '/files/'
    }))
    .pipe(gulp.dest('./src'));
});
