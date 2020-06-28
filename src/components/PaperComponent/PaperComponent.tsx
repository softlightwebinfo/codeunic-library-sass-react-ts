import * as React from "react";
import {IPaperComponentProps} from "./PaperComponent.types";
import "./PaperComponent.scss";
import {BEM} from "../../libs";

export function PaperComponent(props: IPaperComponentProps) {
    const bm = new BEM("Paper-component", {
        rounded: !props.square,
        elevation: (props.elevation || 0).toString(),
        [props.variant]: !!props.variant,
    });
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            {props.children}
        </div>
    );
}
