import * as React from "react";
import {IDotComponentProps} from "./DotComponent.types";
import "./DotComponent.scss";
import {BEM} from "../../libs";

export function DotComponent(props: IDotComponentProps) {
    const bm = new BEM("Dot-component", {
        color: props.color,
    });
    bm.Append(props.className);
    return (
        <span
            style={props.style}
            className={bm.toString()}
        />
    );
}
