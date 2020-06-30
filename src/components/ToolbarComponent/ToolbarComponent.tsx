import * as React from "react";
import {IToolbarComponentProps} from "./ToolbarComponent.types";
import "./ToolbarComponent.scss";
import {BEM} from "../../libs";

export function ToolbarComponent(props: IToolbarComponentProps) {
    const bm = new BEM("Toolbar-component", {
        gutters:  props.gutters != undefined ? props.gutters : true,
        regular: props.regular != undefined ? props.regular : true,
    });
    return (
        <section
            className={bm.toString()}
        >
            {props.children}
        </section>
    );
}
