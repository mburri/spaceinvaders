module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    var config = {
        appPath: '.'
    };

    grunt.initConfig({

        config: config,

        connect: {
            options: {
                port: 9000,
                open: true,
                livereload: 35729,
                hostname: 'localhost'
            },

            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            require('connect-livereload')(),
                            connect.static(config.appPath)

                        ];
                    }
                }
            }
        },

        jshint: {
            all: ['*.js']
        },
        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: ['*.js'],
                tasks: ['jshint'],
            },
            html: {
                files: ['*.html']
            }
        }
    });

    grunt.registerTask('serve', function(target) {
        grunt.task.run([
            'jshint',
            'connect',
            'watch'
        ]);
    });
};