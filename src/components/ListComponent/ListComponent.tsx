import * as React from "react";
import {IListComponentProps} from "./ListComponent.types";
import "./ListComponent.scss";
import {BEM} from "../../libs";
import {Component} from "react";

export function ListComponent(props: IListComponentProps) {
    const bm = new BEM("List-component", {
        padding: props.padding != undefined ? props.padding : true,
        horizontal:props.horizontal,
    });
    const Component = props.component || "div";
    bm.Append(props.className);
    return (
        // @ts-ignore
        <Component
            style={props.style}
            id={props.id}
            aria-label={props.ariaLabel}
            className={bm.toString()}
        >
            {props.children}
        </Component>
    );
}
