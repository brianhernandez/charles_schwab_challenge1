module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /** Sass **/
    sass: {
      dev: {
        options: {
          style: 'expanded',
          sourcemap: 'auto',
        },
        files: {
          'styles.css': 'app.scss'
        }
      }
    },

    /** Autoprefixer **/
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: '*.css',
        dest: ''
      }
    },

    /** Watch Task **/
    watch: {
      options: {
          livereload: true
        },
      css: {
        files: '*.scss',
        tasks: ['sass', 'autoprefixer']
      },
      html: {
        files: ['index.html']
      },
      javascript: {
        files: ['app.js']
      }
    },

    /** Live Reload **/
    connect: {
      server: {
        options: {
          port: 9000,
          base: '.',
          hostname: '0.0.0.0',
          protocol: 'http',
          livereload: true,
          open: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['connect','watch']);
};
