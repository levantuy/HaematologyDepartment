import React, { Component } from 'react';
import $ from 'jquery';
import '../../scss/modalReport.css';
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
        serviceUrl: "http://192.168.100.4:80/api/reports/",
        templateUrl: 'reportTemplates/telerikReportViewerTemplate.html',
        reportSource: {
          report: "Report1.trdp",
          parameters: { year: "2017" }
        },
        // Specifies whether the viewer is in interactive or print preview mode.
        // PRINT_PREVIEW - Displays the paginated report as if it is printed on paper. Interactivity is not enabled.
        // INTERACTIVE - Displays the report in its original width and height without paging. Additionally interactivity is enabled.
        viewMode: "PRINT_PREVIEW",
        // Sets the scale mode of the viewer.
        // Three modes exist currently:
        // FIT_PAGE - The whole report will fit on the page (will zoom in or out), regardless of its width and height.
        // FIT_PAGE_WIDTH - The report will be zoomed in or out so that the width of the screen and the width of the report match.
        // SPECIFIC - Uses the scale to zoom in and out the report.
        scaleMode: "SPECIFIC",
        scale: 1.3,
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
