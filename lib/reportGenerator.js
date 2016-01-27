'use strict';

var async = require('async');

class ReportGenerator {
  constructor(config,domain,reportFormatter) {
    this.config = config;
    this.domain = domain;
    this.reportFormatter = reportFormatter;
  }

  run(callback) {
    var _this = this;
    async.waterfall([
      function(done) {
        _this.fetchSitemap(done);
      },
      function(urls,done) {
        _this.callAPI(urls,done);
      },
      function(reports,done) {
        _this.buildReports(reports,done);
      }
    ],callback);
  }

  fetchSitemap(callback) {
    //TODO
    callback(null,['/some/random/path']);
  }

  callAPI(urls,callback) {
    //TODO
    callback(null,[
      {
        'path': '/some/random/path',
        'report': {}
      }
    ]);
  }

  buildReports(reports,callback) {
    var _this = this;
    async.parallel(
      reports.map(function(report) {
        return function(done) {
          _this.processReport(report.path,report.report,done);
        };
      }),
      callback
    );
  }
}
