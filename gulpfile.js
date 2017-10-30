var gulp = require('gulp'),
  exec = require('child_process').exec,
  runSequence = require('run-sequence'),
  chalk = require('chalk');

require('require-dir')('build/tasks');

gulp.task('default', ['watch', 'dev-inject'], function() {
  exec("whoami", function(error, result) {
    console.log(chalk.bgGreen('Welcome to') + chalk.bold.bgGreen(' **HappyHR(Dev Mode)**'));
  });
});