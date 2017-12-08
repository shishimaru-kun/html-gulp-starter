var gulp = require('gulp');

/**
 * 画像ファイルを圧縮して 出力用フォルダに生成します。
 *
 */

gulp.task('image-minify', function () {
	var config = require('../config').imageMinify;
	var changed = require('gulp-changed');
	var imagemin = require('gulp-imagemin');

	gulp.src(config.src)
		.pipe(changed(config.dest))
		.pipe(imagemin(
			{
				optimizationLevel: config.optimizationLevel
			}
		))
		.pipe(gulp.dest(config.dest));
});