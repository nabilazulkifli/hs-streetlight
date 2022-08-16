import React, { Component } from "react";
import Chart from "react-apexcharts";
import {barChartData, barChartEletricData, barChartOptions} from "../../variables/charts";

export class BarChart extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            chartData: [],
            chartOptions: {},
        };
    }

    componentDidMount() {
        this.setState({
            chartData: barChartData,
            chartOptions: barChartOptions,
        });
    }

    render() {
        return (
            <Chart
                options={{}}
                series={barChartData}
                type="bar"
                width="100%"
                height="100%"
            />
        );
    }
}


export class EleBarChart extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            chartData: [],
            chartOptions: {},
        };
    }

    componentDidMount() {
        this.setState({
            chartData: barChartEletricData,
            chartOptions: barChartOptions,
        });
    }

    render() {
        return (
            <Chart
                options={{}}
                series={barChartEletricData}
                type="bar"
                width="100%"
                height="100%"
            />
        );
    }
}

// export default BarChart;
// export default EleBarChart;

