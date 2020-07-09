import * as React from "react";
import {ICodeComponentProps} from "./CodeComponent.types";
import "./CodeComponent.scss";
import {BEM} from "../../libs";

export function CodeComponent(props: ICodeComponentProps) {
    const bm = new BEM("Code-component", {});
    return (
        <pre className={bm.toString()}>
            <code>
                {props.children}
            </code>
        </pre>
    );
}
