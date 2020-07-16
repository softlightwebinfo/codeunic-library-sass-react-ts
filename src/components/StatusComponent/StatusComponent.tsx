import * as React from "react";
import {IStatusComponentProps} from "./StatusComponent.types";
import "./StatusComponent.scss";
import {BEM} from "../../libs";

export function StatusComponent(props: IStatusComponentProps) {
    const bm = new BEM("Status-component", {
        [props.status]: !!props.status,
    });
    bm.Append(props.className);
    return (
        <span
            style={props.style}
            className={bm.toString()}
        />
    );
}
