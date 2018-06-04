import React, { Component } from 'react';
import $ from 'jquery';
require("jquery/dist/jquery");
require("../../reports/ReportViewer/js/telerikReportViewer-11.1.17.614");
require("../../reports/ReportViewer/js/telerikReportViewer.kendo-11.1.17.614");

class Patient extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    this._handleClick();
  }

  _handleClick() {
    $("#reportViewer1")
      .telerik_ReportViewer({
        serviceUrl: "http://localhost:63260/api/reports/",
        templateUrl: 'reportTemplates/telerikReportViewerTemplate.html',
        reportSource: {
          report: "Report1.trdp",
          parameters: { year: "2017" }
        },
        // viewMode: telerikReportViewer.ViewModes.INTERACTIVE,
        // scaleMode: telerikReportViewer.ScaleModes.SPECIFIC,
        scale: 1.0,
        ready: function () {
          //this.refreshReport();
        },
      });
  }

  render() {
    return (
      <div>
        <div id="reportViewer1">loading...</div>
      </div>
    );
  }
}

export default Patient;
