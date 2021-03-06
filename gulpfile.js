var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

// Load all tasks
requireDir('./gulp/tasks');
gulp.task('default', function(done) {
  runSequence(
    'css-compile',
    'build-clean',
    'build-react',
    // 'styleguide',
    'watch',
    'node',
    done
  );
});

gulp.task('build', function(done) {
  runSequence(
    'build-clean',
    'build-react',
    'css-compile',
    // 'styleguide',
    'build-zip',
    done
  );
});

gulp.task('lint', ['eslint']);
