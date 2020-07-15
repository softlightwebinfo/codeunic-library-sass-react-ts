import * as React from "react";
import {IDashStatsListLayoutProps} from "./DashStatsListLayout.types";
import "./DashStatsListLayout.scss";
import {DashStatsComponent, ListComponent} from "../..";

export function DashStatsListLayout(props: IDashStatsListLayoutProps) {
    return (
        <ListComponent horizontal>
            {props.data.map((item, index) => (
                <DashStatsComponent
                    {...item}
                    key={index}
                    title={item.title}
                    subTitle={item.subTitle}
                />
            ))}
        </ListComponent>
    );
}
