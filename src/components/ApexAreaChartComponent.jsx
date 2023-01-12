import Chart from "react-apexcharts";
import { createElement } from "react";

export function ApexAreaChartComponent(props) {
    const { widgetStyle, widgetClassName, widgetTabIndex, chartType, labelUnite } = props;
    const chartOptions = JSON.parse(props.chartOptions);
    const chartSeries = JSON.parse(props.chartSeries);

    if (labelUnite !== undefined && labelUnite !== "") {
        // eslint-disable-next-line space-before-function-paren
        chartOptions.options.dataLabels.formatter = function (val) {
            return `${val} ${labelUnite}`;
        };
    }

    return (
        <div style={widgetStyle} className={widgetClassName} tabIndex={widgetTabIndex}>
            <Chart options={chartOptions.options} series={chartSeries.series} type={chartType} />
        </div>
    );
}
