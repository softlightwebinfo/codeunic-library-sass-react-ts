import React from "react";
import {StatsInfoComponent} from './StatsInfoComponent';
import {ListComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|StatsInfo"
};

export const Default = () => <StatsInfoComponent
    value={20}
    total={100}
    title={"Total leave"}
/>;
export const List = () => (
    <ListComponent>
        {[...new Array(10)].map((_, index) => (
            <StatsInfoComponent
                key={index}
                value={20}
                total={100}
                title={"Total leave"}
            />
        ))}
    </ListComponent>
);
