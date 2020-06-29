import * as React from "react";
import {IInputLabelComponentProps} from "./InputLabelComponent.types";
import "./InputLabelComponent.scss";
import {BEM} from "../../libs";

export function InputLabelComponent(props: IInputLabelComponentProps) {
    const bm = new BEM("InputLabel-component", {
        isUp: props.isUp,
    });
    bm.Append(props.className);
    return (
        <label
            htmlFor={props.htmlFor}
            className={bm.toString()}
        >
            {props.children}
        </label>
    );
}
