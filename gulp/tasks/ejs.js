var gulp = require('gulp');

/**
 * ejs ファイルをコンパイルして html ファイルを出力用フォルダに生成します。
 *
 */

gulp.task('ejs', function () {
	var config = require('../config').ejs;
	var plumber = require('gulp-plumber');
	var ejs = require('gulp-ejs');
	var rename = require('gulp-rename');

	gulp.src(config.src)
		.pipe(plumber())
		.pipe(ejs())
		.pipe(rename({extname: '.html'}))
		.pipe(gulp.dest(config.dest));
});