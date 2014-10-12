module.exports = function(grunt) {

    pkg: grunt.file.readJSON('package.json'),
    grunt.initConfig({
        serve: {
            options: {
                port: 9000
            }
        }
    });

    grunt.loadNpmTasks('grunt-serve');
}