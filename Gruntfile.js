module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      copy: {
        main: {
          files: [
            {expand: true, cwd:"src/", src: ['**/*.html', '**/*.css'], dest: 'dist/'},
            {expand: true, src: ['package.json'], dest: 'dist/'},
            {expand: true, src: ['documentation.md'], dest: 'dist/'},
          ]
        },
      },
      ts: {
        default : {
          tsconfig: './tsconfig.json'
        }
      },
      shell:{
        start:{
            command:"npm start"
        },
      },
      watch: {
        scripts: {
          files: ['src/**/*'],
          tasks: ['copy', "ts"],
          options: {
            spawn: false,
          },
        },
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-shell');
};
