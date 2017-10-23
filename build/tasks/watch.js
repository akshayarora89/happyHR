var gulp = require('gulp'),
    browserSync = require('browser-sync').create();
gulp.task('watch', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      },
      port: 8000
  });
  gulp.watch("./index.html").on('change', browserSync.reload);
  gulp.watch("assets/templates/**/*.html").on('change', browserSync.reload);
  gulp.watch("assets/javascripts/**/*.js").on('change', browserSync.reload);
  gulp.watch("assets/stylesheets/*.min.css").on('change', browserSync.reload);
  // gulp.watch(['bower.json', '.bowerrc'], ['bower']);
  // gulp.watch("assets/clientMVC/partials/*.html").on('change', browserSync.reload);
  // gulp.watch("assets/clientMVC/*.js").on('change', browserSync.reload);
  // gulp.watch("assets/clientMVC/controllers/*.js").on('change', browserSync.reload);
  // gulp.watch("assets/clientMVC/directives/*.js").on('change', browserSync.reload);
  // gulp.watch("assets/clientMVC/services/*.js").on('change', browserSync.reload);
  // gulp.watch("assets/css/*.css").on('change', browserSync.reload);
});