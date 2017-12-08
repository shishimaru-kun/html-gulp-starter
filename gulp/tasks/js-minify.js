var gulp = require('gulp');

/**
 * js ファイルを圧縮して 出力用フォルダに生成します。
 *
 */

gulp.task('js-minify', function () {
	var config = require('../config').js;
	var plumber = require('gulp-plumber');
	var gulpif = require('gulp-if');
	var uglify = require('gulp-uglify');

	gulp.src(config.src)
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest(config.dest));
});