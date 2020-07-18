import * as React from "react";
import {IMessageAvatarComponentProps} from "./MessageAvatarComponent.types";
import "./MessageAvatarComponent.scss";
import {BEM} from "../../libs";
import {AvatarComponent, TypographyComponent} from "../..";

export function MessageAvatarComponent(props: IMessageAvatarComponentProps) {
    const bm = new BEM("MessageAvatar-component", {});
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <AvatarComponent mini={props.mini} src={props.src} className={bm.Children("avatar")}>{props.name}</AvatarComponent>
            <div className={bm.Children("right")}>
                <TypographyComponent variant={"body1"}>{props.title}</TypographyComponent>
                <TypographyComponent variant={"caption"} color={"gray"}>{props.subTitle}</TypographyComponent>
            </div>
        </div>
    );
}
