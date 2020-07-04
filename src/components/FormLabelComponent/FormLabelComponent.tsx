import * as React from "react";
import {IFormLabelComponentProps} from "./FormLabelComponent.types";
import "./FormLabelComponent.scss";
import {BEM} from "../../libs";

export function FormLabelComponent(props: IFormLabelComponentProps) {
    const bm = new BEM("FormLabel-component", {});
    const Component = props.component || "div";
    return (
        // @ts-ignore
        <Component
            className={bm.toString()}
        >
            {props.children}
        </Component>
    );
}
