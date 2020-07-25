import * as React from "react";
import {IAppBarComponentProps} from "./AppBarComponent.types";
import "./AppBarComponent.scss";
import {BEM} from "../../libs";

export function PageLayoutComponent(props: IAppBarComponentProps) {
    const bm = new BEM("AppBar-component", {
        position: props.position,
        color: props.color || "primary",
    });
    bm.Append(props.className);
    return (
        <header
            style={props.style}
            className={bm.toString()}
        >
            {props.children}
        </header>
    );
}
