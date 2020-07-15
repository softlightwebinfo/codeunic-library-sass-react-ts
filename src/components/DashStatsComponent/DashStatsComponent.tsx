import * as React from "react";
import {IDashStatsComponentProps} from "./DashStatsComponent.types";
import "./DashStatsComponent.scss";
import {BEM} from "../../libs";
import {TypographyComponent} from "../..";

export function DashStatsComponent(props: IDashStatsComponentProps) {
    const bm = new BEM("DashStats-component", {});
    bm.Append(props.className);
    return (
        <div
            className={bm.toString()}
            style={props.style}
        >
            <TypographyComponent component={"h4"} variant={"h4"}>{props.title.toString()}</TypographyComponent>
            <TypographyComponent component={"p"} color={"gray"}>{props.subTitle}</TypographyComponent>
        </div>
    );
}
