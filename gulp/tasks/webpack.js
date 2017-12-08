var gulp = require('gulp');

/**
 * js ファイルをバンドルして出力用フォルダに生成します。
 *
 */

gulp.task('webpack', function () {
	var config = require('../config');
	var gulpif = require('gulp-if');
	var uglify = require('gulp-uglify');
	var webpack = require('gulp-webpack');

	gulp.src(config.webpack.entry)
		.pipe(webpack(config.webpack))
		.pipe(gulpif(config.js.uglify, uglify()))
		.pipe(gulp.dest(config.js.dest));
});