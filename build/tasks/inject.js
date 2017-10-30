var gulp = require('gulp');
var inject = require('gulp-inject');
// var bowerFiles = require('main-bower-files');
var bowerMain = require('bower-main');

gulp.task('dev-inject', function() {
  var target = gulp.src('./index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var jsFiles = gulp.src(['./assets/javascripts/**/*.js', '!./assets/javascripts/directives/gcal.min.js'], { read: false });
  var bowerJsFiles = gulp.src(bowerMain('js').normal, { read: false });
  var bowerCssFiles = gulp.src(bowerMain('css').normal, { read: false });
  var cssFiles = gulp.src(['./assets/stylesheets/*.css', './assets/stylesheets/*.min.css'], { read: false });
  return target.pipe(inject(bowerJsFiles, { name: 'bower' }))
    .pipe(inject(bowerCssFiles, { name: 'bower' }))
    .pipe(inject(jsFiles))
    .pipe(inject(cssFiles))
    .pipe(gulp.dest('./'));
});