import * as React from "react";
import {ICardMediaComponentProps} from "./CardMediaComponent.types";
import "./CardMediaComponent.scss";
import {BEM} from "../../libs";

export function CardMediaComponent(props: ICardMediaComponentProps) {
    const bm = new BEM("CardMedia-component", {});
    return (
        <div
            style={{
                backgroundImage: `url(${props.image})`
            }}
            className={bm.toString()}
            title={props.title}
        />
    );
}
