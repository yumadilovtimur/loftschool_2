'use strict';

const gulp = require('gulp');

const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const groupMediaQueries = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-cleancss');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-replace');
const del = require('del');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();

const imagemin = require('gulp-imagemin');

function styles() {
  return gulp.src('./src/scss/main.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(groupMediaQueries())
    .pipe(postcss([
      autoprefixer({browsers: ['last 3 version']}),
    ]))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('./build/css/'));
}

function scripts() {
  return gulp.src('./src/js/**/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('./build/js/'))
}

function htmls() {
  return gulp.src('./src/*.html')
    .pipe(plumber())
    .pipe(replace(/\n\s*<!--DEV[\s\S]+?-->/gm, ''))
    .pipe(gulp.dest("./build/"));
}

function images() {
  return gulp.src('./src/images/**/*.{jpg,jpeg,png,gif,svg}')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest('./build/images/'));
}

function fonts() {
  return gulp.src('./src/fonts/**/*.{woff,woff2,ttf,svg,eot}')
    .pipe(gulp.dest('./build/fonts/'));
}

function clean() {
  return del('build/')
}

function watch() {
  gulp.watch('./src/scss/**/*.scss', styles);
  gulp.watch('./src/js/**/*.js', scripts);
  gulp.watch('./src/*.html', htmls);
}

exports.styles = styles;
exports.scripts = scripts;
exports.htmls = htmls;
exports.images = images;
exports.clean = clean;
exports.watch = watch;
exports.fonts = fonts;

gulp.task('build', gulp.series(
  clean,
  gulp.parallel(styles, scripts, htmls, images, fonts)
));

gulp.task('default', gulp.series(
  clean,
  gulp.parallel(styles, scripts, htmls, images, fonts),
  gulp.parallel(watch)
));