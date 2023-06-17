const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Static server and live reloading
gulp.task('serve', function () {
  // Base directory for the server
  browserSync.init({
    server: './',
  });

  // Watch HTML, CSS, JS files for changes and reload
  gulp.watch(['*.html', '*.css', '*.js']).on('change', browserSync.reload);
});

// Default task
gulp.task('default', gulp.series('serve'));
