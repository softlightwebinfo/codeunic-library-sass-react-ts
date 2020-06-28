import * as React from "react";
import {IFabComponentProps} from "./FabComponent.types";
import "./FabComponent.scss";
import {IconComponent} from "../..";

export function FabComponent(props: IFabComponentProps) {
    let classNames = ["fab-component"];
    if (props.icon && props.children) classNames.push("fab-component--extended");
    if(props.theme) classNames.push(`fab-component--${props.theme}`);
    return (
        <button className={classNames.join(" ")}>
            <span className={"fab-component__label"}>
                {props.icon && <IconComponent icon={props.icon}/>}
                {props.icon && props.children ? (<span className={"fab-component__child"}>{props.children}</span>): (props.children)}
            </span>
        </button>
    )
}
