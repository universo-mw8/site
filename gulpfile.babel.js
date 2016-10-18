'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const gcmq = require('gulp-group-css-media-queries');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
// const rollup = require('gulp-rollup');
const concat = require('gulp-concat');
const browserSync = require('browser-sync');
const cp = require('child_process');
const sourcemaps = require('gulp-sourcemaps');
const ghPages = require('gulp-gh-pages');
const path = require('path');
// const rollupConfig = require('./rollup.config');

let notification = {
  jekyllBuild: '<span style="color: green">Jekyll is running!</span>'
};

const srcPaths = {
  js: '_source/_js/**/*.js',
  css: '_source/_sass/**/*.scss',
  mainSass: '_source/_sass/main.scss',
  img: '_source/_img/**/*',
  videos: '_source/_videos/**/*',
  assets: '_source/_assets/**/*',
  fonts: '_source/_fonts/**/*'
};

const buildPaths = {
  build: 'build/**/*',
  js: 'build/js/',
  css: 'build/css/',
  img: 'build/img/',
  videos: 'build/videos/',
  assets: 'build/assets/',
  fonts: 'build/fonts/'
};

gulp.task('jekyll-build', (done) => {
  browserSync.notify(notification.jekyllBuild);
  return cp.spawn('jekyll', ['build'], {
    stdio: 'inherit'
  }).on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], () => {
  browserSync.reload();
});

gulp.task('browser-sync', ['jekyll-build'], () => {
  browserSync.init({
    server: {
      baseDir: '_site'
    },
    port: 4000
  });
});

gulp.task('css', () => {
  gulp.src(srcPaths.mainSass)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gcmq())
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('_site/build/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest(buildPaths.css));
});

gulp.task('js', () => {
  gulp.src(srcPaths.js)
    .pipe(plumber())
    // .pipe(rollup(rollupConfig))
    .pipe(uglify())
    .pipe(gulp.dest(buildPaths.js));
});

gulp.task('images', () => {
  gulp.src(srcPaths.img)
    .pipe(plumber())
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(buildPaths.img));
});

gulp.task('assets', () => {
  gulp.src(srcPaths.assets)
    .pipe(gulp.dest(buildPaths.assets));
});

gulp.task('videos', () => {
  gulp.src(srcPaths.videos)
    .pipe(gulp.dest(buildPaths.videos));
});

gulp.task('fonts', () => {
  gulp.src(srcPaths.fonts)
    .pipe(gulp.dest(buildPaths.fonts));
});

gulp.task('watch', () => {
  gulp.watch(srcPaths.css, ['css']);
  gulp.watch(srcPaths.js, ['js']);
  // gulp.watch(srcPaths.img, ['images']);
  gulp.watch(['*.html', '_includes/*.html', '_layouts/*.html', '_source/_js/**/*.js', '**/*.html'], ['jekyll-rebuild']);
});

gulp.task('deploy', () => {
  gulp.src(['./_site/**/*', `!${buildPaths.build.map}`])
    .pipe(ghPages());
});

gulp.task('build', ['js', 'css', 'assets', 'videos', 'fonts']);

gulp.task('default', ['css', 'js', 'images', 'assets', 'videos', 'fonts', 'watch', 'browser-sync']);
gulp.task('deploy', ['css', 'js', 'images', 'assets', 'videos', 'fonts', 'pages']);