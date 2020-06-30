import * as React from "react";
import {ICardContentComponentProps} from "./CardContentComponent.types";
import "./CardContentComponent.scss";
import {BEM} from "../../libs";

export function CardContentComponent(props: ICardContentComponentProps) {
    const bm = new BEM("CardContent-component", {

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
