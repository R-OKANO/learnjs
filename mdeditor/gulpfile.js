var gulp        = requier('gulp'),
    gulp-stylus = require('gulp-stylus');

var path = {
    // ファイル名は正規表現でも指定可能っぽい。
    'stylusFile': ['css/default.styl']
};

gulp.task('stylus', function() {
    return gulp.src(path.stylusFile)
        .pipe(stylus({
            compress: true,
            use: [
                // 例
                // koutoSwiss(),
            ]
        }))
        .on('error', function (err) {
            console.error('Error', err.message);
        })
        .pipe(gulp.dest("css"));
});

gulp.task('watch-stylus', function(){
    gulp.watch(path.stylusFile, ['stylus']);
});
