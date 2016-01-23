var babel      = require('broccoli-babel-transpiler')
var funnel     = require('broccoli-funnel')
var concat     = require('broccoli-concat')
var mergeTrees = require('broccoli-merge-trees')

var appJs = babel('src')

// // Grab the polyfill file provided by the Babel library
var babelPath = 'node_modules/babel-core'

var browserPolyfill = funnel(babelPath, {
  files: ['browser-polyfill.js']
})

// Add the Babel polyfill to the tree of transpiled files
appJs = mergeTrees([browserPolyfill, appJs])

// Concatenate all the JS files into a single file
appJs = concat(appJs, {
  inputFiles: ['browser-polyfill.js', '*.js'],
  outputFile: 'index.js'
})

module.exports = appJs

