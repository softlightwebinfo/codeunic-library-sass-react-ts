import * as React from "react";
import {IFormGroupComponentProps} from "./FormGroupComponent.types";
import "./FormGroupComponent.scss";
import {BEM} from "../../libs";

export function FormGroupComponent(props: IFormGroupComponentProps) {
    const bm = new BEM("FormGroup-component", {
        row: props.row,
    });
    return (
        <div
            className={bm.toString()}
        >
            {props.children}
        </div>
    );
}
