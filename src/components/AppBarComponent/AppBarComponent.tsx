import * as React from "react";
import {IAppBarComponentProps} from "./AppBarComponent.types";
import "./AppBarComponent.scss";
import {BEM} from "../../libs";

export function AppBarComponent(props: IAppBarComponentProps) {
    const bm = new BEM("AppBar-component", {
        position: props.position,
        color: props.color || "primary",
    });
    return (
        <header
            style={props.style}
            className={bm.toString()}
        >
            {props.children}
        </header>
    );
}
