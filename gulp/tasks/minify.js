var gulp = require('gulp');

/**
 * タスクの並列実行（css,js圧縮）
 *
 */

gulp.task('minify',
	['js-minify', 'css-minify']
);