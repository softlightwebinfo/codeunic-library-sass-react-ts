import * as React from "react";
import {ISidebarComponentProps} from "./SidebarComponent.types";
import "./SidebarComponent.scss";
import {BEM} from "../../libs";

export function SidebarComponent(props: ISidebarComponentProps) {
    const bm = new BEM("Sidebar-component", {});
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            {props.children}
        </div>
    );
}
