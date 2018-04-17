var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
});
 
gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('sass:minify', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))
        .pipe(rename({suffix: ".min"}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
})

gulp.task('build', ['sass', 'sass:minify']);