'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');

gulp.task('build-react', function () {
    return gulp.src(['./src/**/*.js', '!./src/**/*.styleguide.js'])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lib'));
});
