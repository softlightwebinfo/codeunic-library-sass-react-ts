import * as React from "react";
import {IFormComponentProps} from "./FormComponent.types";
import "./FormComponent.scss";
import {BEM} from "../../libs";

export function FormComponent(props: IFormComponentProps) {
    const bm = new BEM("Form-component", {
        card: props.card,
    });
    bm.Append(props.className);
    return (
        <form id={props.id} className={bm.toString()} onSubmit={props.onSubmit}>
            {props.children}
        </form>
    );
}
