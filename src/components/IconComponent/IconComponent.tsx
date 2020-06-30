import * as React from "react";
import {IIconComponentProps} from "./IconComponent.types";
import "./IconComponent.scss";
import alarm from '../../icons/alarm.svg';
import menu from '../../icons/menu.svg';

export const icons = {
    alarm,
    menu,
};

export function IconComponent(props: IIconComponentProps) {
    if (!(props.icon in icons)) return null;
    return (
        <img style={props.style} src={icons[props.icon]} alt={props.title} title={props.title}/>
    );
}
