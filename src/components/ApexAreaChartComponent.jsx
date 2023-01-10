import Chart from "react-apexcharts";
import { createElement } from "react";

export function ApexAreaChartComponent(props) {
    const { widgetStyle, widgetClassName, widgetTabIndex } = props;
    const chartOptions = JSON.parse(props.chartOptions);
    const chartSeries = JSON.parse(props.chartSeries);

    return (
        <div style={widgetStyle} className={widgetClassName} tabIndex={widgetTabIndex}>
            <Chart options={chartOptions.options} series={chartSeries.series} />
        </div>
    );
}
