module.exports = function(grunt) {


    require('load-grunt-tasks')(grunt);

    var config = {
        appPath: 'app/'
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
            all: ['Gruntfile.js', 'app/js/*.js']
        },
        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: ['app/js/*.js'],
                tasks: ['jshint'],
            },
            html: {
                files: ['app/*.html']
            },
            css: {
                files: ['app/css/*.css']
            }
        }
    });

    grunt.registerTask('start', function(target) {
        grunt.task.run([
            'jshint',
            'connect',
            'watch'
        ]);
    });
};