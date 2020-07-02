import * as React from "react";
import {IListComponentProps} from "./ListComponent.types";
import "./ListComponent.scss";
import {BEM} from "../../libs";
import {Component} from "react";

export function ListComponent(props: IListComponentProps) {
    const bm = new BEM("List-component", {
        padding: props.padding != undefined ? props.padding : true,
    });
    const Component = props.component || "div";
    return (
        // @ts-ignore
        <Component
            aria-label={props.ariaLabel}
            className={bm.toString()}
        >
            {props.children}
        </Component>
    );
}
