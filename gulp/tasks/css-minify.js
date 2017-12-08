var gulp = require('gulp');

/**
 * css ファイルを圧縮・結合・renameして 出力用フォルダに生成します。
 *
 */

gulp.task('css-minify', function () {
	var config = require('../config').sass;
	var plumber = require('gulp-plumber');
	var concat = require('gulp-concat');
	var minify = require('gulp-minify-css');
	var uglify = require('gulp-uglify');

	gulp.src(config.dest + '*.css')
		.pipe(plumber())
		.pipe(minify())
		.pipe(concat('bundle.min.css'))
		.pipe(gulp.dest(config.dest));
});