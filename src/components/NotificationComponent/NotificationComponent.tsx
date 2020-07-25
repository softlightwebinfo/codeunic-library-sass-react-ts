import * as React from "react";
import {INotificationComponentProps} from "./NotificationComponent.types";
import "./NotificationComponent.scss";
import {BEM} from "../../libs";
import {AvatarComponent, TypographyComponent} from "../..";

export function NotificationComponent(props: INotificationComponentProps) {
    const bm = new BEM("Notification-component", {});
    bm.Append(props.className);
    const Component = props.component || "div";
    return (
        // @ts-ignore
        <Component
            style={props.style}
            className={bm.toString()}
            onClick={props.onClick}
        >
            <AvatarComponent className={bm.Children("avatar")} src={props.avatar}>{props.name.slice(0, 2)}</AvatarComponent>
            <div className={bm.Children("content")}>
                <TypographyComponent className={bm.Children("author")}>{props.name}</TypographyComponent>
                <TypographyComponent className={bm.Children("time")}>{props.date}</TypographyComponent>
                <TypographyComponent className={bm.Children("content")}>{props.description}</TypographyComponent>
            </div>
        </Component>
    );
}
