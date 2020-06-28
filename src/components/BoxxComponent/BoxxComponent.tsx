import * as React from "react";
import {IBoxxComponentProps} from "./BoxxComponent.types";
import "./BoxxComponent.scss";
import {BEM} from "../../libs";

export function BoxxComponent(props: IBoxxComponentProps) {
    const bm = new BEM("Boxx-component", {

    });
    return (
        <div
            className={bm.toString()}
        >
            {props.children}
        </div>
    );
}
