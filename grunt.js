/*###############################################
# 
# Gruntfile
#
###############################################*/

module.exports = function( grunt ) {

  // Project configuration
  grunt.initConfig({

    // Linter config
    lint: {
      files: [
        "app/**/*.js",
        "public/js/**/*.js"
      ]
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        noarg: true,
        sub: true,
        boss: true,
        eqnull: true,
        browser: true,
        scripturl: true,
        es5:true
      },
      globals: {
        jQuery: true
      }
    },

    // Server definition
    server: {
      port: 8080,
      base: '.'
    },

    // Watcher task to compil LESS -> css
    watch: {
      files: ['public/css/less/**/*.less', '<config:lint.files>'],
      tasks: 'less lint'
    },

    // LESS->css compilation task
    less: {
      development: {
        options: {
          paths: ["public/css/less"],
          compress: true,
          yuicompress: false
        },
        files: {
          "public/css/screen.css" : "public/css/less/screen.less"
        }
      }
    }
  });

  // Load tasks from "grunt-sample" grunt plugin installed via Npm.
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task.
  grunt.registerTask('default', 'lint less');
  grunt.registerTask('watch-server', 'server watch');
  grunt.registerTask('prod', 'lint less');
};