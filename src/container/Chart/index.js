import React, { Component } from 'react'

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const dataTable = [
  {
    title: "IE",
    value: 260
  },
  {
    title: "Google Chrome",
    value: 230
  },
  {
    title: "WS",
    value: 200
  },
  {
    title: "Telegram",
    value: 165
  },
  {
    title: "Mail",
    value: 139
  }
];

class Chart extends Component {

  componentDidMount() {
    const { data = dataTable } = this.props;
    let chart = am4core.create("chartdiv", am4charts.PieChart);

    chart.data = data;

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "title";

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }


  render() {
    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    )
  }
}

export default Chart
