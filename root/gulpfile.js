var gulp = require('gulp');
var del = require('del');
var inject = require('gulp-inject');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');

var vendor_files = ['./node_modules/angular/angular.js'];

gulp.task('default', gulp.series(clean, copyIndex, sassDatAss, copyAppJs, copyVendor));

gulp.task('index', gulp.series(clean, copyIndex));

gulp.task('watch', gulp.series(watchAppJs));

gulp.task('server', gulp.series(webServer, gulp.parallel(watchAppJs)));


function clean(done) {
    del(['dist/**/*.*']);
    done();
}

function copyIndex(done) {
    var sources = gulp.src(vendor_files, {read: false});
    return gulp.src('./client/index.html')
        .pipe(inject(sources, {name: 'app', ignorePath: 'node_modules', addPrefix: 'vendor' }))
        .pipe(gulp.dest('./dist', {overwrite: true}));
}

function copyAppJs(done) {
    return gulp.src('./client/**/*.js').pipe(gulp.dest('./dist', {overwrite: true}));
}

function copyVendor(done) {
    return gulp.src(vendor_files, {base: './node_modules'}).pipe(gulp.dest('./dist/vendor', {overwrite: true}));
}

function sassDatAss(done) {
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css', {overwrite: true}));
}

function watchAppJs(done) {
    return gulp.watch('./client/**/*.*', gulp.series(clean, copyIndex, sassDatAss, copyAppJs, copyVendor));
}

function webServer(done) {
    return gulp.src('dist')
        .pipe(server({
            host: 'localhost',
            port: '8000',
            defaultFile: 'index.html',
            livereload: true,
            directoryListing: false,
            open: true
        }));
}
