var gulp = require('gulp');

/**
 * タスクの並列実行（sass,ejsのコンパイル）
 *
 */

gulp.task('build',
	['sass', 'ejs']
);