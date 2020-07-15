import * as React from "react";
import {ITableColComponentProps} from "./TableColComponent.types";
import "./TableColComponent.scss";
import {BEM} from "../../libs";

export function TableColComponent(props: ITableColComponentProps) {
    const bm = new BEM("TableCol-component", {
        align: props.align,
    });
    const Component = props.header ? "th" : "td";
    return (
        <Component
            style={props.style}
            className={bm.toString()}
        >
            {props.children}
        </Component>
    );
}

TableColComponent.displayName = "TableColComponent";
