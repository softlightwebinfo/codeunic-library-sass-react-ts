import * as React from "react";
import {IDialogActionsComponentProps} from "./DialogActionsComponent.types";
import "./DialogActionsComponent.scss";
import {BEM} from "../../libs";

export function DialogActionsComponent(props: IDialogActionsComponentProps) {
    const bm = new BEM("DialogActions-component", {});
    return (
        <div
            className={bm.toString()}
        >
            {props.children}
        </div>
    );
}
