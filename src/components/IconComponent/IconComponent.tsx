import * as React from "react";
import {IIconComponentProps} from "./IconComponent.types";
import "./IconComponent.scss";
import alarm from './assets/alarm';
import menu from './assets/menu';
import more_vert from './assets/more_vert-black-18dp';
import favorite from './assets/heart';
import share from './assets/compartir';
import arrow from './assets/arrow';
import uncheck from './assets/uncheck';
import check from './assets/check';
import {BEM} from "../../libs";

export const icons = {
    alarm,
    menu,
    more_vert,
    favorite,
    share,
    arrow,
    uncheck,
    check,
};

export function IconComponent(props: IIconComponentProps) {
    if (!(props.icon in icons)) return null;
    const Component = icons[props.icon];
    const bm = new BEM("Icon-component", {});
    return (
        <Component
            className={bm.toString()}
            style={props.style}
            height={20}
            width={20}
            src={icons[props.icon]}
            alt={props.title}
            title={props.title}
        />
    );
}
