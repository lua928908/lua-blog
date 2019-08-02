import React, { Component } from "react";
import Chart from "react-apexcharts";

class TechChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['React', 'Next', 'Vue', 'Angular', 'Node', 'mySql', 'mongDB', 'Antd', 'ApexCharts']
        }
      },
      series: [
        {
          name: "기술 선호도",
          data: [93, 82, 70, 14, 55, 76, 35, 90, 78]
        }
      ]
    };
  }

  render() {
    return (
      <div className="chart">
		<Chart
			options={this.state.options}
			series={this.state.series}
			type="bar"
		/>
      </div>
    );
  }
}

export default TechChart;