import * as React from "react";
import {IFormControlComponentProps} from "./FormControlComponent.types";
import "./FormControlComponent.scss";
import {BEM} from "../../libs";

export function FormControlComponent(props: IFormControlComponentProps) {
    const bm = new BEM("FormControl-component", {});
    let classNames = [bm.toString()];
    if (props.className) classNames.push(props.className);
    if (props.focus) classNames.push("FormControl-component--focus");
    const Component = props.component || "div";
    return (
        // @ts-ignore
        <Component
            className={classNames.join(" ")}
        >
            {props.children}
        </Component>
    );
}
