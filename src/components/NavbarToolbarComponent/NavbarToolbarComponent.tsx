import * as React from "react";
import {INavbarToolbarComponentProps} from "./NavbarToolbarComponent.types";
import "./NavbarToolbarComponent.scss";
import {BEM} from "../../libs";

export function NavbarToolbarComponent(props: INavbarToolbarComponentProps) {
    const bm = new BEM("NavbarToolbar-component", {});
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <div className={bm.Children("left")}>{props.left}</div>
            {props.center && (<div className={bm.Children("center")}>{props.center}</div>)}
            <div className={bm.Children("right")}>{props.right}</div>
        </div>
    );
}
