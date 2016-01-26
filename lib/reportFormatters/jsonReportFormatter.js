'use strict';

class JSONReportFormatter {
  constructor(config,domain,outputDirectory) {
    super(config,domain,outputDirectory);
  }

  generateReportForPage(pagePath,report,callback) {
    callback(null,JSON.stringify(report,null,'  '));
  }

  getFileExtension() {
    return 'json';
  }
}

module.exports = JSONReportFormatter;
