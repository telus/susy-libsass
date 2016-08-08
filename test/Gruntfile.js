module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    compass: {
      dev: {
        options: {
          sassDir: 'scss',
          cssDir: 'css/compass',
          noLineComments: true,
          outputStyle: 'expanded',
          relativeAssets: true,
          quiet: false,
          force: true,
          importPath: ['node_modules/sass-true/sass', '../sass/']
        }
      }
    },
    sass: {
      dev: {
        options: {
          sourceComments: false,
          outputStyle: 'expanded',
          precision: 5,
          includePaths: ['node_modules/compass-mixins/lib', 'node_modules/sass-true/sass', '../sass/']
        },
        files: [{
          expand: true,
          cwd: 'scss/',
          src: ['**/*.scss'],
          dest: 'css/libsass',
          ext: '.css'
        }]
      }
    }
  });

  grunt.registerTask('test-compass', ['compass:dev',]);
  grunt.registerTask('test-libsass', ['sass:dev',]);
  grunt.registerTask('default', ['test-compass', 'test-libsass']);
};


