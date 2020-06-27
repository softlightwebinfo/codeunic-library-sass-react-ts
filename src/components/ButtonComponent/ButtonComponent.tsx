import * as React from "react";
import "./ButtonComponent.scss";
import {IButtonComponentProps} from "./ButtonComponent.types";

export function ButtonComponent(props: IButtonComponentProps) {
    const classNames = ["button-component"];
    if (props.theme) classNames.push(`button-component--${props.theme}`);
    if (props.isDisabled) classNames.push(`button-component--disabled`);
    classNames.push(`button-component--${props.variant || "contained"}`);

    return (
        <button className={classNames.join(" ")}>
            <span className={"button-component__children"}>{props.children}</span>
        </button>
    );
}
