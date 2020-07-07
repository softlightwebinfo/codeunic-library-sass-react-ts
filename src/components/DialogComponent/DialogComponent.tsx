import * as React from "react";
import {IDialogComponentProps} from "./DialogComponent.types";
import "./DialogComponent.scss";
import {BEM} from "../../libs";
import {OverlayComponent} from "../..";

export function DialogComponent(props: IDialogComponentProps) {
    const bm = new BEM("Dialog-component", {});
    return (
        <OverlayComponent open={props.open} portal={props.portal}>
            <div
                className={bm.toString()}
            >
                {props.children}
            </div>
        </OverlayComponent>
    );
}
