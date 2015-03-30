module.exports = function(grunt) {
	grunt.initConfig({
		compass: {                  // Task
			dist: {                   // Target
				options: {              // Target options
					sassDir: 'scss',
					cssDir: '../css',
					environment: 'production'
				}
			},
			dev: {                    // Another target
				options: {
					sassDir: 'scss',
					cssDir: '../css'
				}
			}
		},
		watch: {
			css: {
				files: ['scss/**/*.scss'],
				tasks: ['compass'],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['compass:dist', 'watch']);
}

