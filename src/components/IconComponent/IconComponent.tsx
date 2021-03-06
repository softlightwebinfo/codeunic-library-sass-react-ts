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
import radio from './assets/radio';
import radioCircle from './assets/radioCircle';
import plus from './assets/plus-circle';
import phone from './assets/phone';
import camera from './assets/camera-video';
import setting from './assets/cog';
import attachment from './assets/attachment';
import send from './assets/send';
import pencil from './assets/pencil';
import close from './assets/cross';
import grid from './assets/grid';
import trash from './assets/trash';
import tick from './assets/tick';
import user from './assets/user';
import eye from './assets/eye';
import calendar from './assets/calendar-full';
import subject from './assets/subject';
import bold from "./assets/bold";
import file from "./assets/file-empty";
import chat from "./assets/bubble";
import size from "./assets/size";
import cart from "./assets/cart";
import drum from "./assets/drum";
import ampGuitar from "./assets/ampGuitar";
import ampBass from "./assets/ampBass";
import arrowBottom from "./assets/arrow";
import mixer from "./assets/mixer";
import microphone from "./assets/microphone";
import dashboard from "./assets/dashboard";

import {BEM} from "../../libs";

export const icons = {
    alarm,
    cart,
    menu,
    more_vert,
    size,
    favorite,
    share,
    arrow,
    uncheck,
    check,
    radio,
    radioCircle,
    bold,
    plus,
    phone,
    camera,
    setting,
    dashboard,
    attachment,
    close,
    pencil,
    grid,
    send,
    trash,
    tick,
    user,
    calendar,
    eye,
    subject,
    file,
    chat,
    arrowBottom,
    drum,
    microphone,
    ampGuitar,
    ampBass,
    mixer,
};

export function IconComponent(props: IIconComponentProps) {
    if (!(props.icon in icons)) return null;
    const Component = icons[props.icon];
    const bm = new BEM("Icon-component", {});
    bm.Append(props.className);
    return (
        <Component
            className={bm.toString()}
            style={props.style}
            height={props.height || 20}
            width={props.width || 20}
            src={icons[props.icon]}
            alt={props.title}
            title={props.title}
        />
    );
}
