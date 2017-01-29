const fs = require('fs');
const Builder = require('systemjs-builder');

/**
 * Define baseUrl
 * . -> build, run as npm script file
 * .. -> debug, run as node file
 * @type {string}
 */
const baseUrl = '..';
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
    }
  }
});


builder
  .buildStatic(
    `${baseUrl}/src/index.js`,
    `${baseUrl}/dist/index.dist.js`,
    {
      inject: true,
      minify: true,
      mangle: false,
      sourceMaps: true,
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
