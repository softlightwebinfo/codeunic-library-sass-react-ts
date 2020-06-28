import * as React from "react";
import "./ButtonBaseComponent.scss";
import {IButtonBaseComponentProps} from "./ButtonBaseComponent.types";

export function ButtonBaseComponent(props: IButtonBaseComponentProps) {
    const classNames = ["Button-base-component"];
    if (props.isDisabled) classNames.push(`Button-base-component--disabled`);

    return (
        <button
            style={props.style}
            className={classNames.join(" ")}
        >
            {props.children}
        </button>
    );
}
