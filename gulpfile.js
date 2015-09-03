var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

// Load all tasks
requireDir('./gulp/tasks');
gulp.task('default', function(done) {
  runSequence(
    'css-compile',
    'styleguide',
    'watch',
    'node',
    done
  );
});

gulp.task('build', function(done) {
  runSequence(
    'css-compile',
    'styleguide',
    done
  );
});

gulp.task('lint', ['eslint']);
