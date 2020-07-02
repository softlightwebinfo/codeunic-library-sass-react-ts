import * as React from "react";
import {IMenuListComponentProps} from "./MenuListComponent.types";
import "./MenuListComponent.scss";
import {BEM} from "../../libs";

export function MenuListComponent(props: IMenuListComponentProps) {
    const bm = new BEM("MenuList-component", {
        padding: props.padding,
    });
    return (
        <ul
            className={bm.toString()}
        >
            {props.children}
        </ul>
    );
}
