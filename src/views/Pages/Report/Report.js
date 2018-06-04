import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

const reportViewer1 = {
  position: 'absolute',
  left: '5px',
  right: '5px',
  top: '40px',
  bottom: '5px',
  overflow: 'hidden',
  clear: 'both'
};

class Report extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>

        <link href="http://kendo.cdn.telerik.com/2015.3.930/styles/kendo.common.min.css" rel="stylesheet" id="common-css" />
        <link href="http://kendo.cdn.telerik.com/2015.3.930/styles/kendo.blueopal.min.css" rel="stylesheet" id="skin-css" />
        <script src="/ReportViewer/js/telerikReportViewer.kendo-11.2.17.1025.min.js"></script>

        <script src="/ReportViewer/js/telerikReportViewer-11.2.17.1025.js"></script>

        <body>
          <div id="reportViewer1" className="reportViewer1">loading...</div>
          
        </body>
      </div>
    );
  }
}

export default Report;
