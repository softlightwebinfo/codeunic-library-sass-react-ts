import * as React from "react";
import {ILabelComponentProps} from "./LabelComponent.types";
import "./LabelComponent.scss";
import {BEM} from "../../libs";


export function LabelComponent(props: ILabelComponentProps) {
    const bm = new BEM("Label-component", {
        [props.theme]: !!props.theme,
    });
    bm.Append(props.className);
    return (
        <span
            style={props.style}
            className={bm.toString()}
        >
            {props.name}
        </span>
    );
}
