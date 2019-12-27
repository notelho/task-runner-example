// Gulp.js configuration

// include gulp and plugins
var
	gulp = require('gulp'),
	newer = require('gulp-newer'),
	imagemin = require('gulp-imagemin');

// file locations
var
	source = 'source/',
	dest = 'build/',

	images = {
		in: source + 'images/*.*',
		out: dest + 'images/'
	};

// manage images
gulp.task('images', function() {
	return gulp.src(images.in)
		.pipe(newer(images.out))
		.pipe(imagemin())
		.pipe(gulp.dest(images.out));
});

// default task
gulp.task('default', function() {

});
