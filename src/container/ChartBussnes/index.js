import React, { Component } from 'react'

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";

am4core.useTheme(am4themes_animated);

class Chart extends Component {

  componentDidMount() {
    const { tableId } = this.props
    let chart = am4core.create(`chartdivBussnies${tableId}`, am4plugins_forceDirected.ForceDirectedTree);
    chart.legend = new am4charts.Legend();
    let networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
    networkSeries.data = this.props.data;

    networkSeries.dataFields.linkWith = "linkWith";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.id = "name";
    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.children = "children";

    networkSeries.nodes.template.tooltipText = "{name}";
    networkSeries.nodes.template.fillOpacity = 1;

    networkSeries.nodes.template.label.text = "{name}"
    networkSeries.fontSize = 8;
    networkSeries.maxLevels = 2;
    networkSeries.maxRadius = am4core.percent(6);
    networkSeries.manyBodyStrength = -16;
    networkSeries.nodes.template.label.hideOversized = true;
    networkSeries.nodes.template.label.truncate = true;

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
