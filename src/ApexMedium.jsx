import "./ui/ApexMedium.css";
import { ApexAreaChartComponent } from "./components/ApexAreaChartComponent.jsx";
import { createElement } from "react";

export function ApexMedium(props) {
    return (
        <ApexAreaChartComponent
            widgetStyle={props.style}
            widgetClassName={props.class}
            widgetTabIndex={props.tabIndex}
            chartOptions={props.options}
            chartSeries={props.series}
        />
    );
}
