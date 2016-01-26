'use strict';

var async = require('async');
var path = require('path');
var fs = require('fs');

class ReportFormatter {
  constructor(config,domain,outputDirectory) {
    this.config = config;
    this.domain = domain;
    this.outputDirectory = path.join(outputDirectory,domain);
  }

  setup(callback) {
    fs.mkdir(this.outputDirectory,callback);
  }

  processReport(pagePath,report,done) {
    var _this = this;
    async.waterfall([
      function(callback) {
        _this.generateReportForPage(pagePath,report,callback);
      },
      function(generatedReport,callback) {
        _this.writeFileForPageReport(pagePath,generatedReport,callback);
      }
    ],done);
  }

  writeFileForPageReport(pagePath,generatedReport,callback) {
    var filepath = path.join(this.outputDirectory,this._replaceFileDelimiters(pagePath)) + '.' + this.getFileExtension();
    fs.writeFile(filepath,generatedReport,callback);
  }

  generateReportForPage(pagePath,report,callback) {
    callback('Must override generateReportForPage()');
  }

  getFileExtension() {
    console.error('Must override getFileExtension()');
    return '';
  }

  _replaceFileDelimiters(pagePath) {
    while(pagePath.indexOf(path.delimiter) >= 0) {
      pagePath = pagePath.replace(path.delimiter,'-')
    }
    return pagePath;
  }

}

module.exports = ReportFormatter;
