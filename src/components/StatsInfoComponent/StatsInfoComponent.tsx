import * as React from "react";
import {IStatsInfoComponentProps} from "./StatsInfoComponent.types";
import "./StatsInfoComponent.scss";
import {BEM} from "../../libs";
import {ProgressComponent, TypographyComponent} from "../..";

export function StatsInfoComponent(props: IStatsInfoComponentProps) {
    const bm = new BEM("StatsInfo-component", {});
    bm.Append(props.className);

    const getStat = () => (
        <>
            <b>{props.value}</b>
            {' / '}
            <small>{props.total}</small>
        </>
    );
    const getValue = () => (
        ((props.value / props.total) * 100).toFixed(2)
    );
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <p className={bm.Children("top")}>
                <TypographyComponent component={"span"} variant={"body1"}>{props.title}</TypographyComponent>
                <span>{getStat()}</span>
            </p>
            <ProgressComponent value={Number(getValue())}/>
        </div>
    );
}


