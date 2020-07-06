import * as React from "react";
import {IListItemComponentProps} from "./ListItemComponent.types";
import "./ListItemComponent.scss";
import {BEM} from "../../libs";

export function ListItemComponent(props: IListItemComponentProps) {
    const bm = new BEM("ListItem-component", {
        button: props.button,
        gutters: props.gutters != undefined ? props.gutters : true,
    });
    const Component = props.component || "div";
    bm.Append(props.className);
    return (
        // @ts-ignore
        <Component
            aria-haspopup={props.ariaHasPopup}
            aria-controls={props.ariaControl}
            aria-label={props.ariaLabel}
            onClick={props.onClick}
            className={bm.toString()}
        >
            {props.children}
        </Component>
    );
}
