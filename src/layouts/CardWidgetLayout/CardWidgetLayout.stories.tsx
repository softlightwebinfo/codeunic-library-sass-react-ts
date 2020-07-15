import React from "react";
import {CardWidgetLayout} from './CardWidgetLayout';
import {GridComponent} from "../..";

// @ts-ignore
export default {
    title: "Layouts|CardWidget"
};

export const Default = () => (
    <CardWidgetLayout
        title={"112"}
        subTitle={"Project"}
        icon={"alarm"}
    />
);
export const Grid = () => (
    <GridComponent container spacing={1}>
        <GridComponent item xs={3}>
            <CardWidgetLayout
                title={"112"}
                subTitle={"Project"}
                icon={"alarm"}
            />
        </GridComponent>
        <GridComponent item xs={3}>
            <CardWidgetLayout
                title={"112"}
                subTitle={"Project"}
                icon={"alarm"}
            />
        </GridComponent>
        <GridComponent item xs={3}>
            <CardWidgetLayout
                title={"112"}
                subTitle={"Project"}
                icon={"alarm"}
            />
        </GridComponent>
        <GridComponent item xs={3}>
            <CardWidgetLayout
                title={"112"}
                subTitle={"Project"}
                icon={"alarm"}
            />
        </GridComponent>
    </GridComponent>
);
