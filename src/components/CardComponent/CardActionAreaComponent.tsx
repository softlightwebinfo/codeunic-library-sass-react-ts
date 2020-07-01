import * as React from "react";
import {ICardActionsComponentProps} from "./CardActionAreaComponent.types";
import "./CardActionAreaComponent.scss";
import {BEM} from "../../libs";

export function CardActionAreaComponent(props: ICardActionsComponentProps) {
    const bm = new BEM("CardActionArea-component", {

    });
    return (
        <button
            onClick={props.onClick}
            type={"button"}
            style={props.style}
            className={bm.toString()}
        >
            {props.children}
        </button>
    );
}
