import * as React from "react";
import {IIconComponentProps} from "./IconComponent.types";
import "./IconComponent.scss";
import alarm from '../../icons/alarm.svg';

export const icons = {
    alarm,
};

export function IconComponent(props: IIconComponentProps) {
    if (!(props.icon in icons)) return null;
    return (
        <img src={icons[props.icon]} alt={props.title} title={props.title}/>
    );
}
