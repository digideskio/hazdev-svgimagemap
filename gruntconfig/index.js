'use strict';

var gruntconfig = {
  browserify: require('./browserify'),
  clean: require('./clean'),
  compass: require('./compass'),
  concurrent: require('./concurrent'),
  config: require('./config'),
  connect: require('./connect'),
  copy: require('./copy'),
  cssmin: require('./cssmin'),
  jshint: require('./jshint'),
  mocha_phantomjs: require('./mocha_phantomjs'),
  uglify: require('./uglify'),
  watch: require('./watch'),

  tasks: [
    'grunt-browserify',
    'grunt-contrib-clean',
    'grunt-concurrent',
    'grunt-contrib-compass',
    'grunt-contrib-concat',
    'grunt-contrib-connect',
    'grunt-contrib-copy',
    'grunt-contrib-cssmin',
    'grunt-contrib-jshint',
    'grunt-contrib-uglify',
    'grunt-contrib-watch',
    'grunt-mocha-phantomjs'
  ]
};

module.exports = gruntconfig;
