// Sass configuration
const gulp = require('gulp');
const sass = require('gulp-sass');
const path = require('path');

gulp.task('sass', function () {
    gulp.src('src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function (f) {
            return path.join(f.base, '..', 'dist');
        }))
});

gulp.task('default', ['sass'], function () {
    gulp.watch('src/*.scss', ['sass']);
})