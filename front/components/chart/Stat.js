import React, { Component, useState } from "react";
import Chart from "react-apexcharts";

const Stat = () => {
	const [options, setOptions] = useState({
		chart: {
			id: "radar"
		},
		labels: ['성실함', '체력', '근력', '지식', '커뮤니케이션', '내성'],
	});
	const [series, setSeries] = useState([
		{
			name: 'Stat',
			data: [81, 66, 74, 81, 83, 53],
		}
	]);

	return (
		<>
			<Chart
				options={options}
				series={series}
				type="radar"
			/>
		</>
	);
};

export default Stat;