'use strict';

class ReportGenerator {
  constructor(config,domain) {
    this.config = config;
    this.domain = domain;
  }

  run(callback) {
    callback();
  }
}
