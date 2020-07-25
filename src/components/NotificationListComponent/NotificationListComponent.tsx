import * as React from "react";
import {INotificationListComponentProps} from "./NotificationListComponent.types";
import "./NotificationListComponent.scss";
import {BEM} from "../../libs";
import {ListComponent, NotificationComponent} from "../..";

export function NotificationListComponent(props: INotificationListComponentProps) {
    const bm = new BEM("NotificationList-component", {});
    bm.Append(props.className);
    return (
        <ListComponent
            style={props.style}
            className={bm.toString()}
        >
            {props.data.map((item, index) => (
                <NotificationComponent
                    component={"li"}
                    key={index}
                    avatar={item.avatar}
                    name={item.name}
                    description={item.description}
                    date={item.date}
                />
            ))}
        </ListComponent>
    );
}
