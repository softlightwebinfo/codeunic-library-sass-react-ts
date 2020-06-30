import * as React from "react";
import "./ButtonIconComponent.scss";
import {IButtonIconComponentTypes} from "./ButtonIconComponent.types";

export function ButtonIconComponent(props: IButtonIconComponentTypes) {
    const classNames = ["ButtonIcon-component"];

    return (
        <button
            onClick={props.onClick}
            style={props.style}
            className={classNames.join(" ")}
        >
            {props.children}
        </button>
    );
}
