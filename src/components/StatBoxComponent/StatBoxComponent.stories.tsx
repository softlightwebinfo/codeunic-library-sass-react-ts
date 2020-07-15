import React from "react";
import {StatBoxComponent} from './StatBoxComponent';
import {GridComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|StatBox"
};

export const Default = () => <StatBoxComponent
    title={"Total Tasks"}
    value={380}
/>;
export const Grid = () => (
    <GridComponent container spacing={2}>
        <GridComponent item xs={6}>
            <StatBoxComponent
                title={"Total Tasks"}
                value={380}
            />
        </GridComponent>
        <GridComponent item xs={6}>
            <StatBoxComponent
                title={"Total Tasks"}
                value={380}
            />
        </GridComponent>
    </GridComponent>
);
