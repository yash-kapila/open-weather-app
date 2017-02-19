var gulp = require('gulp');
var karmaServer = require('karma').Server;

gulp.task('karma', [], function(done) {
	new karmaServer({
		configFile: __dirname+'/karma.conf.js'
	}, done).start();
});

gulp.task('test', ['karma']);