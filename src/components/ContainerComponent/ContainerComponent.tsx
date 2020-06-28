import * as React from "react";
import {IContainerComponentProps} from "./ContainerComponent.types";
import "./ContainerComponent.scss";
import {BEM} from "../../libs";

export function ContainerComponent(props: IContainerComponentProps) {
    let bm = new BEM("Container-component", {
        "disable-gutters": props.disableGutters,
        fixed: props.fixed,
        maxWidth: props.maxWidth,
    });
    return (
        <div
            className={bm.toString()}
        >
            {props.children}
        </div>
    );
}
