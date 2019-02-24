module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      copy: {
        main: {
          files: [
            {expand: true, cwd:"src/", src: ['**/*.html'], dest: 'dist/'},
          ],
        },
      },
      electron: {
		macosBuild: {
			options: {
                    name: 'App Builder',
                    dir: 'src',
                    out: 'out',
                    version: '0.0.1',
                    platform: 'linux',
                    arch: 'x64'
			    }
		    }
	    }
    });
  
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-electron');
};
