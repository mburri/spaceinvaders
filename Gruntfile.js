module.exports = function(grunt) {

    grunt.initConfig({
        serve: {
            options: {
                port: 9000
            }
        }, 
        jshint: {
            all: ['*.js']
        }
    });

    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'serve']);
};