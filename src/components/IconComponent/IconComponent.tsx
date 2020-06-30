import * as React from "react";
import {IIconComponentProps} from "./IconComponent.types";
import "./IconComponent.scss";
import alarm from '../../icons/alarm.svg';
import menu from '../../icons/menu.svg';
import more_vert from '../../icons/more_vert-black-18dp.svg';

export const icons = {
    alarm,
    menu,
    more_vert
};

export function IconComponent(props: IIconComponentProps) {
    console.log(more_vert);
    if (!(props.icon in icons)) return null;
    return (
        <img style={props.style} src={icons[props.icon]} alt={props.title} title={props.title}/>
    );
}
