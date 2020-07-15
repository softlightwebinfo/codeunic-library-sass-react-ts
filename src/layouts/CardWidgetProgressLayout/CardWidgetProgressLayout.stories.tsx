import React from "react";
import {CardWidgetProgressLayout} from './CardWidgetProgressLayout';
import {GridComponent, ListComponent} from "../..";

// @ts-ignore
export default {
    title: "Layouts|CardWidgetProgress"
};

export const Default = () => (
    <CardWidgetProgressLayout
        title={"New Employees"}
        value={150}
        progress={79}
        subTitle={"Previous Month"}
        lastValue={200}
    />
);
export const Grid = () => (
    <GridComponent container spacing={1}>
        <GridComponent item xs={3}>
            <CardWidgetProgressLayout
                title={"New Employees"}
                value={150}
                progress={79}
                subTitle={"Previous Month"}
                lastValue={200}
            />
        </GridComponent>
        <GridComponent item xs={3}>
            <CardWidgetProgressLayout
                title={"New Employees"}
                value={150}
                progress={79}
                subTitle={"Previous Month"}
                lastValue={200}
            />
        </GridComponent>
        <GridComponent item xs={3}>
            <CardWidgetProgressLayout
                title={"New Employees"}
                value={150}
                progress={79}
                subTitle={"Previous Month"}
                lastValue={200}
            />
        </GridComponent>
        <GridComponent item xs={3}>
            <CardWidgetProgressLayout
                title={"New Employees"}
                value={150}
                progress={79}
                subTitle={"Previous Month"}
                lastValue={200}
            />
        </GridComponent>
    </GridComponent>
);
export const GridList = () => (
    <ListComponent horizontal style={{width: "100%"}}>
        {[...new Array(4)].map((item, index) => (
            <CardWidgetProgressLayout
                key={index}
                title={"New Employees"}
                value={150}
                progress={79}
                subTitle={"Previous Month"}
                lastValue={200}
            />
        ))}
    </ListComponent>
);
