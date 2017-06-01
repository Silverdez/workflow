var gulp = require('gulp');
var sass = require('gulp-sass');



gulp.task('sass', function () {
    return gulp.src('src/sass/app.sass')
        .pipe(sass({outputStyle : 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('app/css'));
});

gulp.task('default', ['sass']);