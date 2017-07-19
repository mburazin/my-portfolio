/*
 Run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {

      banner_large: {
        options: {
          engine: 'gm',
          sizes: [
          {
            width: 960,
            rename: false,
            quality: 60
          },
          {
            width: 1800,
            rename: false,
            suffix: '_2x',
            quality: 60
          }]
        },

        files: [{
          expand: true,
          src: ['*_large.{gif,jpg}'],
          cwd: 'img_src/banner',
          dest: 'img/'
        }]
      },

      banner_medium: {
        options: {
          engine: 'gm',
          sizes: [
          {
            width: 770,
            rename: false,
            quality: 60
          },
          {
            width: 1500,
            rename: false,
            suffix: '_2x',
            quality: 60
          }]
        },

        files: [{
          expand: true,
          src: ['*_medium.{gif,jpg}'],
          cwd: 'img_src/banner',
          dest: 'img/'
        }]
      },

      banner_small: {
        options: {
          engine: 'gm',
          sizes: [
          {
            width: 500,
            rename: false,
            quality: 60
          },
          {
            width: 1000,
            rename: false,
            suffix: '_2x',
            quality: 60
          }]
        },

        files: [{
          expand: true,
          src: ['*_small.{gif,jpg}'],
          cwd: 'img_src/banner',
          dest: 'img/'
        }]
      },

      featured: {
        options: {
          engine: 'gm',
          sizes: [
            {
              width: 300,
              quality: 60
            },
            {
              width: 400,
              quality: 60
            },
            {
              width: 500,
              quality: 60
            },
            {
              width: 1000,
              quality: 60
            }
          ]
        },

        files: [{
          expand: true,
          src: ['*.{gif,jpg}'],
          cwd: 'img_src/featured',
          dest: 'img/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['img'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the img/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          flatten: true,
          src: 'img_src/fixed/*.{gif,jpg,png,svg}',
          dest: 'img'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-exec');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
