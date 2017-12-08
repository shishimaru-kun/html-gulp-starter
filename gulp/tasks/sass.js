var gulp = require('gulp');

/**
 * scss ファイルをコンパイルして css ファイルを出力用フォルダに生成します。
 *
 */

gulp.task('sass', function () {
	var config = require('../config').sass;
	var gulpif = require('gulp-if');
	var plumber = require('gulp-plumber');
	var sass = require('gulp-sass');
	var sassGlob = require("gulp-sass-glob");
	var sourcemaps = require('gulp-sourcemaps');
	var autoprefixer = require('gulp-autoprefixer');
	var minify = require('gulp-minify-css');
	var gcmq = require('gulp-group-css-media-queries');

	return gulp.src(config.src)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass(config.options))
		.pipe(autoprefixer(config.autoprefixer))
		.pipe(gcmq())
		.pipe(gulpif(config.minify, minify()))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.dest));
});