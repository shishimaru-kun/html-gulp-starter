var gulp = require('gulp');

/**
 * gulpコマンドで実行する初期タスク
 *
 */

gulp.task('watch', function () {
	var config = require('../config').watch;
	var watch = require('gulp-watch');

	watch(config.sass, function () {
		gulp.start(['sass']);
	});

	watch(config.ejs, function () {
		gulp.start(['ejs']);
	});

	watch(config.imageMinify, function () {
		gulp.start(['image-minify']);
	});

	// watch(config.jsMinify, function () {
	// 	gulp.start(['js-minify']);
	// });

	// watch(config.webpack, function () {
	//   gulp.start(['webpack']);
	// });

});