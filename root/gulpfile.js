var gulp = require('gulp');
var del = require('del');
var inject = require('gulp-inject');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');

var vendor_files = ['./node_modules/angular/angular.js', './node_modules/angular-route/angular-route.js'];
var lib_files =['./assets/lib/**/*.*', './assets/lib/**/**/.*', './assets/lib/**/**/**.*'];
var image_files =['./assets/images/**/*.*', './assets/images/**/**/.*', './assets/images/**/**/**.*'];

gulp.task('default', gulp.series(clean, copyIndex, sassDatAss, copyAppJs, copyAppTemplates, copyVendor, copyLibFiles, copyImageFiles));

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
function copyAppTemplates(done) {
    return gulp.src('./client/app/templates/*.html').pipe(gulp.dest('./dist/templates'));
}

function copyVendor(done) {
    return gulp.src(vendor_files, {base: './node_modules'}).pipe(gulp.dest('./dist/vendor', {overwrite: true}));
}

function copyLibFiles(done) {
    return gulp.src(lib_files, {base: './assets'}).pipe(gulp.dest('./dist/assets', {overwrite: true}));
}

function copyImageFiles(done) {
    return gulp.src(image_files, {base: './assets'}).pipe(gulp.dest('./dist/assets', {overwrite: true}));
}

function sassDatAss(done) {
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css', {overwrite: true}));
}

function watchAppJs(done) {
    return gulp.watch('./client/**/*.*', gulp.series(clean, copyIndex, sassDatAss, copyAppJs, copyAppTemplates, copyVendor, copyLibFiles, copyImageFiles));
}

function webServer(done) {
    return gulp.src('./dist')
        .pipe(server({
            host: 'localhost',
            defaultFile: 'index.html',
            port: '8000',
            livereload: false,
            open: true
        }));
}
