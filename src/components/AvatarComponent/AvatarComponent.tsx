import * as React from "react";
import {IAvatarComponentProps} from "./AvatarComponent.types";
import "./AvatarComponent.scss";
import {BEM} from "../../libs";
import {isUndef} from "../../utils";
import {StatusComponent} from "../..";

export function AvatarComponent(props: IAvatarComponentProps) {
    const bm = new BEM("Avatar-component", {
        mini: props.mini,
        status: !!props.status,
    });
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            {props.src ? (
                <img src={props.src} alt={props.children.toString()} title={props.children.toString()}/>
            ) : props.children}
            {!isUndef(props.status) && (
                <StatusComponent className={bm.Children("status")} status={props.status}/>
            )}
        </div>
    );
}
