import React, { Component } from 'react'

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const data = (colorSet) => {
  return [ {
  "category": "Module #1",
  "start": "2016-01-01",
  "end": "2016-01-14",
  "color": colorSet.getIndex(0).brighten(0),
  "task": "Gathering requirements"
}, {
  "category": "Module #1",
  "start": "2016-01-16",
  "end": "2016-01-27",
  "color": colorSet.getIndex(0).brighten(0.4),
  "task": "Producing specifications"
}, {
  "category": "Module #1",
  "start": "2016-02-05",
  "end": "2016-04-18",
  "color": colorSet.getIndex(0).brighten(0.8),
  "task": "Development"
}, {
  "category": "Module #1",
  "start": "2016-04-18",
  "end": "2016-04-30",
  "color": colorSet.getIndex(0).brighten(1.2),
  "task": "Testing and QA"
}, {
  "category": "Module #2",
  "start": "2016-01-08",
  "end": "2016-01-10",
  "color": colorSet.getIndex(2).brighten(0),
  "task": "Gathering requirements"
}, {
  "category": "Module #2",
  "start": "2016-01-12",
  "end": "2016-01-15",
  "color": colorSet.getIndex(2).brighten(0.4),
  "task": "Producing specifications"
}, {
  "category": "Module #2",
  "start": "2016-01-16",
  "end": "2016-02-05",
  "color": colorSet.getIndex(2).brighten(0.8),
  "task": "Development"
}, {
  "category": "Module #2",
  "start": "2016-02-10",
  "end": "2016-02-18",
  "color": colorSet.getIndex(2).brighten(1.2),
  "task": "Testing and QA"
}, {
  "category": "Module #3",
  "start": "2016-01-02",
  "end": "2016-01-08",
  "color": colorSet.getIndex(4).brighten(0),
  "task": "Gathering requirements"
}, {
  "category": "Module #3",
  "start": "2016-01-08",
  "end": "2016-01-16",
  "color": colorSet.getIndex(4).brighten(0.4),
  "task": "Producing specifications"
}, {
  "category": "Module #3",
  "start": "2016-01-19",
  "end": "2016-03-01",
  "color": colorSet.getIndex(4).brighten(0.8),
  "task": "Development"
}, {
  "category": "Module #3",
  "start": "2016-03-12",
  "end": "2016-04-05",
  "color": colorSet.getIndex(4).brighten(1.2),
  "task": "Testing and QA"
}, {
  "category": "Module #4",
  "start": "2016-01-01",
  "end": "2016-01-19",
  "color": colorSet.getIndex(6).brighten(0),
  "task": "Gathering requirements"
}, {
  "category": "Module #4",
  "start": "2016-01-19",
  "end": "2016-02-03",
  "color": colorSet.getIndex(6).brighten(0.4),
  "task": "Producing specifications"
}, {
  "category": "Module #4",
  "start": "2016-03-20",
  "end": "2016-04-25",
  "color": colorSet.getIndex(6).brighten(0.8),
  "task": "Development"
}, {
  "category": "Module #4",
  "start": "2016-04-27",
  "end": "2016-05-15",
  "color": colorSet.getIndex(6).brighten(1.2),
  "task": "Testing and QA"
}, {
  "category": "Module #5",
  "start": "2016-01-01",
  "end": "2016-01-12",
  "color": colorSet.getIndex(8).brighten(0),
  "task": "Gathering requirements"
}, {
  "category": "Module #5",
  "start": "2016-01-12",
  "end": "2016-01-19",
  "color": colorSet.getIndex(8).brighten(0.4),
  "task": "Producing specifications"
}, {
  "category": "Module #5",
  "start": "2016-01-19",
  "end": "2016-03-01",
  "color": colorSet.getIndex(8).brighten(0.8),
  "task": "Development"
}, {
  "category": "Module #5",
  "start": "2016-03-08",
  "end": "2016-03-30",
  "color": colorSet.getIndex(8).brighten(1.2),
  "task": "Testing and QA"
}];
}


class Chart extends Component {

  componentDidMount() {
    const { tableId } = this.props
    let chart = am4core.create(`chartdivBussnies${tableId}`, am4charts.XYChart);

    //chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.paddingRight = 30;
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";

    let colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.4;

    chart.data = data(colorSet);

    chart.dateFormatter.dateFormat = "yyyy-MM-dd";
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 1, timeUnit: "day" };
// dateAxis.max = new Date(2018, 0, 1, 24, 0, 0, 0).getTime();
//dateAxis.strictMinMax = true;
    dateAxis.renderer.tooltipLocation = 0;

    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.height = am4core.percent(70);
    series1.columns.template.tooltipText = "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

    series1.dataFields.openDateX = "start";
    series1.dataFields.dateX = "end";
    series1.dataFields.categoryY = "category";
    series1.columns.template.propertyFields.fill = "color"; // get color from data
    series1.columns.template.propertyFields.stroke = "color";
    series1.columns.template.strokeOpacity = 1;
    //let series = chart.series.push(new am4charts.PieSeries());
    chart.scrollbarX = new am4core.Scrollbar();

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }


  render() {
    const { tableId } = this.props;
    return (
      <div id={`chartdivBussnies${tableId}`} style={{ width: "100%", height: "500px" }}></div>
    )
  }
}

export default Chart
