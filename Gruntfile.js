module.exports = function(grunt) {

    grunt.initConfig({

        connect: {
            server: {
                options: {
                    port: 9000,
                    open: true,
                    hostname: 'localhost'
                    //    livereload: 35729,
                    // Change this to '0.0.0.0' to access the server from outside
                 
                }
            }
        },

        jshint: {
            all: ['*.js']
        },
        watch: {
            scripts: {
                files: ['*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    //grunt.registerTask('default', ['jshint', 'serve', 'watch']);
    grunt.registerTask('serve', function(target) {
        grunt.task.run([
            'jshint',
            'connect',
            'watch'
        ]);
    });
};