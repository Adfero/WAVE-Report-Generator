'use strict';

class ReportGenerator {
  constructor(config,domain,reportFormatter) {
    this.config = config;
    this.domain = domain;
    this.reportFormatter = reportFormatter;
  }

  run(callback) {
    // For each page report generated, run this.reportFormatter.processReport(pagePath,reportObject,done)
    callback();
  }
}
