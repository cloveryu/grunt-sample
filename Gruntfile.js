module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		buildDir: 'dist',

		banner: [
			'/*!',
			' * <%= pkg.name %>.js <%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy") %>',
			' */\n\n'
		].join('\n'),

		uglify: {
      options: {
        banner: '<%= banner %>'
      },
      js: {
        options: {
          mangle: false,
          beautify: true,
          compress: false
        },
        files: {
          '<%= buildDir %>/<%= pkg.name %>.js': '<%= jshint.src %>'
        }
      },
      jsmin: {
        options: {
          mangle: true,
          compress: true
        },
        files: {
          '<%= buildDir %>/<%= pkg.name %>.min.js': '<%= jshint.src %>'
        }
      }
    },

    clean: {
      dist: '<%= buildDir %>'
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      src: ['src/**/*.js'],
      tests: ['test/**/*.js', '!test/lib/qunit.js'],
      gruntfile: ['Gruntfile.js']
    },

    qunit: {
      files: ['test/**/*.html']
    },

    watch: {
      js: {
        files: ['<%= jshint.src %>', '<%= jshint.tests %>', '<%= jshint.gruntfile %>'],
        tasks: 'test'
      }
    }
	});

	// aliases
  grunt.registerTask('lint', 'jshint');
  grunt.registerTask('test', 'qunit');
  grunt.registerTask('build', 'uglify');
	grunt.registerTask('default', ['clean', 'lint', 'test', 'build']);

// load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-qunit');
};