import * as React from "react";
import "./ButtonComponent.scss";
import {IButtonComponentProps} from "./ButtonComponent.types";
import {BEM} from "../../libs";

export function ButtonComponent(props: IButtonComponentProps) {
    let bm = new BEM("button-component", {
        [props.theme]: !!props.theme,
        disabled: props.isDisabled,
        [props.variant || "contained"]: true,
        grouped: props.grouped,
        block: props.block,
        rounded: props.rounded,
    });
    bm.Append(props.className);
    return (
        <button
            onClick={props.onClick}
            style={props.style}
            className={bm.toString()}
        >
            <span className={bm.Children("children")}>{props.children}</span>
        </button>
    );
}
