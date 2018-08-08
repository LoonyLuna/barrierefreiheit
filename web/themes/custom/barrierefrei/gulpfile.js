"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var bourbon = require("node-bourbon").includePaths;
var neat = require("node-neat").includePaths;
var browserSync = require("browser-sync");
var fs = require("vinyl-fs");
var notify = require("gulp-notify");
var sourcemaps = require('gulp-sourcemaps');
var sassGlob = require('gulp-sass-glob');
var concat = require("gulp-concat");
var gutil = require('gutil');
var prefix = require('gulp-autoprefixer');
var config = {};

/**
 * If config.js exists, load that config for overriding certain values below.
 */
function loadConfig() {
  config = {};
  config = require("./config");
  return config;
}

loadConfig();


// Compiles all gulp tasks
gulp.task("default", ["sass"]);

gulp.task("sass", function() {
  gulp.src("scss/main.scss")
    .pipe(sassGlob())
    //.pipe(sourcemaps.init())
    .pipe(sass({
      noCache: true,
      outputStyle: "compact",
      lineNumbers: false,
      includePaths: [bourbon, neat],
      sourceMap: true,
    }))
    .on('error', function(error) {
      gutil.log(error);
      this.emit('end');
    })
    .pipe(concat('main.css'))
    .pipe(prefix("last 2 versions", "> 1%", "ie 8"))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest("./css/"))
    .pipe(browserSync.reload({
      stream: true,
    }));
});

gulp.task("browserSync", function() {
  browserSync.init({
    files: ['css/**/*.css', 'js/*.js'],
    port: config.browserSync.port,
    proxy: config.browserSync.hostname,
    open: config.browserSync.openAutomatically,
    reloadDelay: config.browserSync.reloadDelay,
    injectChanges: config.browserSync.injectChanges,
  });
});

// Live reload anytime a file changes
gulp.task("watch", ["browserSync", "sass"], function() {
  gulp.watch("scss/**/*.scss", ["sass"]);
  if (!config.twig.useCache) {
    gulp.watch("templates/**/*.html.twig").on("change", browserSync.reload);
  }
});
