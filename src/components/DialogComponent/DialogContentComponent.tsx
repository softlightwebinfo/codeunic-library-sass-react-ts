import * as React from "react";
import {IDialogContentComponentProps} from "./DialogContentComponent.types";
import "./DialogContentComponent.scss";
import {BEM} from "../../libs";

export function DialogContentComponent(props: IDialogContentComponentProps) {
    const bm = new BEM("DialogContent-component", {});
    return (
        <div
            className={bm.toString()}
        >
            {props.children}
        </div>
    );
}
