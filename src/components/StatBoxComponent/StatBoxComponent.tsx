import * as React from "react";
import {IStatBoxComponentProps} from "./StatBoxComponent.types";
import "./StatBoxComponent.scss";
import {BEM} from "../../libs";
import {TypographyComponent} from "../..";

export function StatBoxComponent(props: IStatBoxComponentProps) {
    const bm = new BEM("StatBox-component", {});
    bm.Append(props.className);

    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <TypographyComponent component={"p"} variant={"body1"}>{props.title}</TypographyComponent>
            <TypographyComponent component={"h3"} variant={"h4"}>{props.value.toString()}</TypographyComponent>
        </div>
    );
}
