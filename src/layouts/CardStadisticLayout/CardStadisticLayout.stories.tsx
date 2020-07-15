import React from "react";
import {CardStadisticLayout} from './CardStadisticLayout';
// @ts-ignore
export default {
    title: "Layouts|CardStadistic"
};

export const Default = () => (
    <CardStadisticLayout
        style={{
            backgroundColor: "white",
            color: "black",
            width: 600,
        }}
        stadistics={[
            {title: "Total tasks", value: 385},
            {title: "Overdue Task", value: 19},
        ]}
        title={"Task Stadistics"}
        progress={[
            {value: 10, color: "success"},
            {value: 40, color: "primary"},
            {value: 20, color: "secondary"},
            {value: 5, color: "gray"},
            {value: 25, color: "success"},
        ]}
        data={[
            {title: "Completed Tasks", subTitle: "166", color: "success"},
            {title: "Completed Tasks", subTitle: "115", color: "gray"},
            {title: "Completed Tasks", subTitle: "31", color: "info"},
            {title: "Completed Tasks", subTitle: "47", color: "warning"},
            {title: "Completed Tasks", subTitle: "5", color: "danger"},
        ]}
    />
);
