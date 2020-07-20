import * as React from "react";
import {ITaskInfoLineComponentProps} from "./TaskInfoLineComponent.types";
import "./TaskInfoLineComponent.scss";
import {BEM} from "../../libs";
import {TypographyComponent} from "../..";

export function TaskInfoLineComponent(props: ITaskInfoLineComponentProps) {
    const bm = new BEM("TaskInfoLine-component", {});
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <span className={bm.Children("line")}>
                <a>{props.user}</a>
                <TypographyComponent component={"span"}>{props.subject}</TypographyComponent>
            </span>
            <TypographyComponent className={bm.Children("time")}>{props.date}</TypographyComponent>
        </div>
    );
}
