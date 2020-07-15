import React from "react";
import {DashStatsComponent} from './DashStatsComponent';
import {BoxxComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|DashStats"
};

export const Default = () => <BoxxComponent style={{backgroundColor: "white"}}>
    <DashStatsComponent
        title={71}
        subTitle={"TOTAL TASKS"}
    />
</BoxxComponent>;
