#! /usr/bin/env node

var ReportGenerator = require('./lib/reportGenerator');
var JSONReportFormatter = require('./lib/reportFormatters/jsonReportFormatter');

var argv = require('minimist')(process.argv.slice(2),{
  'default': {
    'config': path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'],'.wave.json'),
    'outputPath': './'
  }
});

if (argv._.length == 1) {
  generateReport(argv._[0]);
} else {
  usage();
}

function generateReport(domain) {
  var config = require(argv.config);
  var formatter = new JSONReportFormatter(config,domain,outputPath);
  formatter.setup(function(err) {
    if (err) {
      handleError(err);
    } else {
      var generator = new ReportGenerator(config,domain);
      generator.run(function(err) {
        if (err) {
          handleError(err);
        } else {
          process.exit(0);
        }
      })
    }
  });
}

function usage() {

}

function handleError(err) {
  console.error(err);
  process.exit(-1);
}
