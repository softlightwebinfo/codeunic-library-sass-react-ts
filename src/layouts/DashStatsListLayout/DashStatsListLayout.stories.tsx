import React from "react";
import {DashStatsListLayout} from './DashStatsListLayout';
import {BoxxComponent} from "../..";

// @ts-ignore
export default {
    title: "Layouts|DashStatsList"
};

export const Default = () => (
    <BoxxComponent style={{backgroundColor: "white"}}>
        <DashStatsListLayout
            data={[
                {title: "71", subTitle: "TOTAL TASKS"},
                {title: "14", subTitle: "PENDING TASKS"},
            ]}
        />
    </BoxxComponent>
);
