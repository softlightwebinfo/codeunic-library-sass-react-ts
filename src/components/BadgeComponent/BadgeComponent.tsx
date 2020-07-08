import * as React from "react";
import {IBadgeComponentProps} from "./BadgeComponent.types";
import "./BadgeComponent.scss";
import {BEM} from "../../libs";

export function BadgeComponent(props: IBadgeComponentProps) {
    const bm = new BEM("Badge-component", {
        right: props.right != undefined ? props.right : !!props.children,
        color: props.theme ? props.theme : "secondary",
        relative: !props.children,
    });
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            {props.children}
            <span className={"Badge-component__badge"}>{props.badgeContent}</span>
        </div>
    );
}
