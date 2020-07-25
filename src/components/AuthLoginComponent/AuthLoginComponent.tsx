import * as React from "react";
import {IAvatarComponentProps} from "./AvatarComponent.types";
import "./AvatarComponent.scss";
import {BEM} from "../../libs";
import {isUndef} from "../../utils";
import {StatusComponent, TypographyComponent} from "../..";

export function AvatarComponent(props: IAvatarComponentProps) {
    const bm = new BEM("Avatar-component", {
        mini: props.mini,
        status: !!props.status,
        big: props.big,
        user: props.user,
    });
    bm.Append(props.className);
    const avatar = (
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
    if (!props.user) {
        return avatar;
    }
    return (
        <div className={"Avatar-user-component"}>
            {avatar}
            <TypographyComponent className={"Avatar-user-component__name"} component={"span"}>{props.children}</TypographyComponent>
        </div>
    );
}
