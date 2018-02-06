
module.exports = function(config) {
  config.set({
    singleRun: false,

    browsers: [
      'PhantomJS'
    ],

    frameworks: [
      'jasmine'
    ],

    files: [
      'spec.bundle.js'
    ],

    preprocessors: {
      'spec.bundle.js': ['webpack']
    },
    reporters: ['mocha'],
    webpack: require('./webpack-test.config'),

    webpackMiddleware: {
      stats: 'errors-only'
    },

    plugins: [
      require('karma-jasmine'),
      require('karma-mocha-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack')
    ]
  });
};
