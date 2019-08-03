import React, { Component, useState } from "react";
import Chart from "react-apexcharts";

const TechChart = () => {
	const [options, setOptions] = useState({
		chart: {
			id: "basic-bar"
		},
		xaxis: {
			categories: ['React', 'Next', 'Vue', 'Angular', 'Node', 'mySql', 'mongDB', 'Antd', 'ApexCharts']
		}
	});
	const [series, setSeries] = useState([
		{
			name: "기술 선호도",
			data: [93, 82, 70, 14, 55, 76, 35, 90, 78]
		}
	]);

	return (
		<>
			<Chart
				options={options}
				series={series}
				type="bar"
			/>
		</>
	);
};

export default TechChart;