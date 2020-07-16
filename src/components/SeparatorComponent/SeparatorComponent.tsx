import * as React from "react";
import {ISeparatorComponentProps} from "./SeparatorComponent.types";
import "./SeparatorComponent.scss";
import {BEM} from "../../libs";

export function SeparatorComponent(props: ISeparatorComponentProps) {
    const bm = new BEM("Separator-component", {});
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <span className={bm.Children("data")}>{props.data}</span>
        </div>
    );
}
