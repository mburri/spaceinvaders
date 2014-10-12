module.exports = function(grunt) {

    grunt.initConfig({
        serve: {
            options: {
                port: 9000
            }
        }, 
        jshint: {
            all: ['*.js']
        },
        watch: {
            scripts: {
                files: ['*.js'],
                tasks: ['jshint']
            }
        }
    });

    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

//grunt.registerTask('default', ['jshint', 'serve', 'watch']);
    grunt.registerTask('serve', function(target) {
       grunt.task.run([
            'jshint',
            'watch'
        ]);
    });
};