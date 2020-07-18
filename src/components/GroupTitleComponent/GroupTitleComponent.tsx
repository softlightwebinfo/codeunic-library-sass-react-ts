import * as React from "react";
import {IGroupTitleComponentProps} from "./GroupTitleComponent.types";
import "./GroupTitleComponent.scss";
import {BEM} from "../../libs";
import {TypographyComponent} from "../..";

export function GroupTitleComponent(props: IGroupTitleComponentProps) {
    const bm = new BEM("GroupTitle-component", {});
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <TypographyComponent component={"h3"} variant={"body1"} className={bm.Children("title")}>{props.title}</TypographyComponent>
            {props.content}
        </div>
    );
}
