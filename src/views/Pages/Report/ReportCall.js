<script type="text/javascript">
    $(document).ready(function () {
        $("#reportViewer1")
            .telerik_ReportViewer({
                serviceUrl: "http://localhost:63260/api/reports/",
                reportSource: {
                    report: "Report1.trdp"
                },
                viewMode: telerikReportViewer.ViewModes.INTERACTIVE,
                scaleMode: telerikReportViewer.ScaleModes.SPECIFIC,
                scale: 1.0,
                ready: function () {
                    //this.refreshReport();
                },
            })
    });
</script>