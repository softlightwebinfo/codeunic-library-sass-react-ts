import * as React from "react";
import {IMenuItemComponentProps} from "./MenuItemComponent.types";
import "./MenuItemComponent.scss";
import {BEM} from "../../libs";

export function MenuItemComponent(props: IMenuItemComponentProps) {
    const bm = new BEM("MenuItem-component", {
        gutters: props.gutters != undefined ? props.gutters : true,
        selected: props.selected,
        disabled: props.disabled,
    });

    const onClick = (e) => {
        if (props.disabled) return;
        props.onClick(e);
    };

    return (
        <li
            onClick={onClick}
            className={bm.toString()}
        >
            {props.children}
        </li>
    );
}
