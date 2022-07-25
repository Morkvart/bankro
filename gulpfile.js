var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
var pxtoviewport = require('postcss-px-to-viewport');
var inject = require('gulp-inject-string');
var rename = require('gulp-rename');


gulp.task('desk', function () {
    return gulp.src('css/style.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob', function () {
    return gulp.src('css/style-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});


gulp.task('desk_vw', function () {
    return gulp.src('css_build/style.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 1600,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1600px) {\n', '\n}'))
        .pipe(rename('style_vw.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob_vw', function () {
    return gulp.src('css_build/style-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 360,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1024px) {\n', '\n}'))
        .pipe(rename('style-mob-vw.css'))
        .pipe(gulp.dest('css_build'));
});




gulp.task('default', gulp.series(
    'desk',
    'mob',
    'desk_vw',
    'mob_vw'
));

