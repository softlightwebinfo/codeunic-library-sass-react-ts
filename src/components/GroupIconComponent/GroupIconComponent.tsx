import * as React from "react";
import {IGroupIconComponentProps} from "./GroupIconComponent.types";
import "./GroupIconComponent.scss";
import {BEM} from "../../libs";


export function GroupIconComponent(props: IGroupIconComponentProps) {
    const bm = new BEM("GroupIcon-component", {});
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <div className={bm.Children("icon")}>{props.icon}</div>
            <div className={bm.Children("content")}>{props.content}</div>
        </div>
    );
}
