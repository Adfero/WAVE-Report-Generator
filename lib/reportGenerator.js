'use strict';

class ReportGenerator {
  constructor(config,domain,reportFormatter) {
    this.config = config;
    this.domain = domain;
    this.reportFormatter = reportFormatter;
  }

  run(callback) {
    callback();
  }
}
