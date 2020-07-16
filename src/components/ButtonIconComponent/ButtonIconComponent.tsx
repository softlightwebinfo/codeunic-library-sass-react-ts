import * as React from "react";
import "./ButtonIconComponent.scss";
import {IButtonIconComponentTypes} from "./ButtonIconComponent.types";
import {BEM} from "../../libs";

export function ButtonIconComponent(props: IButtonIconComponentTypes) {
    const bm = new BEM("ButtonIcon-component", {});
    const Component = props.component || "button";
    bm.Append(props.className);
    return (
        // @ts-ignore
        <Component
            onClick={props.onClick}
            style={props.style}
            className={bm.toString()}
        >
            {props.children}
        </Component>
    );
}
