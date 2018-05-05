'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const chalk = require('chalk');
const webpack = require('webpack');
const clearConsole = require('react-dev-utils/clearConsole');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const paths = require('../config/paths');
const config = require('../config/webpack.config.dev');

const isInteractive = process.stdout.isTTY;

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

// We require that you explictly set browsers and do not fall back to
// browserslist defaults.
const { checkBrowsers } = require('react-dev-utils/browsersHelper');
checkBrowsers(paths.appPath)
  .then(() => {
    const appName = require(paths.appPackageJson).name;
    // Create a webpack compiler that is configured with custom messages.
    
    const compiler = webpack(config);
    // Launch WebpackDevServer.
    
    const watching = compiler.watch({
      aggregateTimeout: 300,
      poll: 1000
    }, (err, stats) => {
      if (err) {
        console.log(err);
      } 

      console.log(stats.toString({
        chunks: false,
        colors: true
      }))
    });



    process.on('SIGINT', function() {
      watching.close()
      process.exit();
    });
    process.on('SIGTERM', function() {
      watching.close()
      process.exit();
    });
  })
  .catch(err => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });
