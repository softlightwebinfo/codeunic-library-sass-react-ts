import * as React from "react";
import {ICardHeaderComponentProps} from "./CardHeaderComponent.types";
import "./CardHeaderComponent.scss";
import {BEM} from "../../libs";

export function CardHeaderComponent(props: ICardHeaderComponentProps) {
    const bm = new BEM("CardHeader-component", {});
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <div className={"CardHeader-component__avatar"}>
                {props.avatar}
            </div>
            <div className={"CardHeader-component__content"}>
                <span className={"CardHeader-component__title"}>{props.title}</span>
                <span className={"CardHeader-component__subheader"}>{props.subheader}</span>
            </div>
            <div className={"CardHeader-component__action"}>
                {props.action}
            </div>
        </div>
    );
}
