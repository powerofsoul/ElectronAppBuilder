module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      copy: {
        main: {
          files: [
            {expand: true, cwd:"src/", src: ['**/*.html'], dest: 'dist/'},
          ],
        },
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-copy');
};
