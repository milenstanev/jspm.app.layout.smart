const Builder = require('systemjs-builder');

/**
 * Define baseUrl
 * . -> build, run as npm script file
 * .. -> debug, run as node file
 * @type {string}
 */
const baseUrl = '.';
/**
 * Configure builder paths
 */
const builder = new Builder(`${baseUrl}/`, `${baseUrl}/config.js`);

builder.config({
  meta: {
    'angular': {
      build: false
    },
    'angular-ui/ui-router': {
      build: false
    },
    'christopherthielen/ui-router-extras': {
      build: false
    },
    'css': {
      build: false
    },
    'distros/bootstrap-less': {
      build: false
    },
    'json': {
      build: false
    },
    'less': {
      build: false
    },
    'ocombe/ocLazyLoad': {
      build: false
    },
    'text': {
      build: false
    },
  }
});

builder
  .buildStatic(
    `${baseUrl}/index.js`,
    `${baseUrl}/dist/index.dist.js`,
    {
      minify: false,
      sourceMaps: false,
      mangle: false,
      format: 'umd',
      runtime: false
    }
  ).then(function() {
  console.log('Build complete\n');
})
  .catch(function(err) {
    console.log('Build error\n');
    console.log(err);
  });
