module.exports = function (grunt) {
  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: 'src/lib'
        }
      }
    },
    jshint: {
      all: [
        'src/*.js',
      ]
    },
    replace: {
      odometer: {
        options: {
          patterns: [
            {
              match: 'odometer',
              replacement: '\n<%= grunt.file.read("src/lib/odometer/odometer.js") %>'
            }
          ]
        },
        files: [
          {expand: true, cwd: 'src', src: ['btcquote-widget.js'], dest: 'build/'}
        ]
      }
    },
    uglify: {
      "btcquote-widget.min.js": {
        src: "build/btcquote-widget.js",
        dest: "build/btcquote-widget.min.js"
      },
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-replace');

  grunt.registerTask('default', [
    'jshint',
    'bower',
    'replace',
    'uglify'
  ]);
};