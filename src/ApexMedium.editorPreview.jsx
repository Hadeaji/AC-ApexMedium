import { ApexAreaChartComponent } from "./components/ApexAreaChartComponent.jsx";
import { createElement } from "react";

export function preview(props) {
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

export function getPreviewCss() {
    return require("./ui/ApexMedium.css");
}
