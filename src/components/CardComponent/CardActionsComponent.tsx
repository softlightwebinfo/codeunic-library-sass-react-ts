import * as React from "react";
import {ICardActionsComponentProps} from "./CardActionsComponent.types";
import "./CardActionsComponent.scss";
import {BEM} from "../../libs";

export function CardActionsComponent(props: ICardActionsComponentProps) {
    const bm = new BEM("CardActions-component", {

    });
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            {props.children}
        </div>
    );
}
