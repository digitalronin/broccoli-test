var babel  = require('broccoli-babel-transpiler');
var funnel = require('broccoli-funnel');
var concat = require('broccoli-concat');

var appJs = babel('src')

// Concatenate all the JS files into a single file
appJs = concat(appJs, {
  inputFiles: ['*.js'],
  outputFile: 'index.js'
});

module.exports = appJs

