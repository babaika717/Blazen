var
    gulp            = require("gulp"),
    livereload      = require("gulp-livereload"),
    sass            = require("gulp-sass"),
    autoprefixer    = require("gulp-autoprefixer"),
    cleancss        = require("gulp-clean-css"),
    rename          = require("gulp-rename");

gulp.task("reload-css", function () {
    gulp.src('./assets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
         browsers: ['last 3 versions'],
         cascade: false
    }))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(cleancss({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(livereload());
});

gulp.task("default", function () {
    livereload.listen();
    gulp.watch('./assets/*.scss', ['reload-css']);
});