import * as React from "react";
import {IGroupWindowLayoutProps} from "./GroupWindowLayout.types";
import "./GroupWindowLayout.scss";
import {BEM} from "../..";

export function GroupWindowLayout(props: IGroupWindowLayoutProps) {
    const bem = new BEM("GroupWindow-layout", {});
    return (
        <div className={bem.toString()} style={props.style}>
            <div className={bem.Children("header")}>
                {props.header}
            </div>
            <div className={bem.Children("content")}>
                {props.content}
            </div>
            <div className={bem.Children("footer")}>
                {props.footer}
            </div>
        </div>
    );
}
