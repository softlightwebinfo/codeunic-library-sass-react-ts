import * as React from "react";
import {ITaskHeaderComponentProps} from "./TaskHeaderComponent.types";
import "./TaskHeaderComponent.scss";
import {BEM} from "../../libs";
import {ButtonIconComponent, IconComponent, TypographyComponent} from "../..";

export function TaskHeaderComponent(props: ITaskHeaderComponentProps) {
    const bm = new BEM("TaskHeader-component", {});
    bm.Append(props.className);
    return (
        <div
            onClick={props.onClick}
            style={props.style}
            className={bm.toString()}
        >
            <div className={bm.Children("icon")}>
                {props.icon}
            </div>
            <div className={bm.Children("right")}>
                <TypographyComponent variant={"caption"} color={"gray"}>{props.title}</TypographyComponent>
                <TypographyComponent variant={"body2"}>{props.subTitle}</TypographyComponent>
            </div>
            <ButtonIconComponent onClick={props.onDelete} className={bm.Children("close")}>
                <IconComponent icon={"close"}/>
            </ButtonIconComponent>
        </div>
    );
}
