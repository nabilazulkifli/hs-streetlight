import React from "react";
import ReactApexChart from "react-apexcharts";
import {lineChartData, lineChartOptions} from "../../variables/charts";

class LineChart extends React.Component {
    constructor(props: any) {
        super(props);

        this.state = {
            chartData: [],
            chartOptions: {},
        };
    }

    componentDidMount() {
        this.setState({
            chartData: lineChartData,
            chartOptions: lineChartOptions,
        });
    }

    render() {
        return (
            <ReactApexChart
                options={{}}
                series={lineChartData}
                type="area"
                width="100%"
                height="100%"
            />
        );
    }
}

export default LineChart;
