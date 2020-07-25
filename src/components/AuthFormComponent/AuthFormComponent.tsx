import * as React from "react";
import {IAuthFormComponentProps} from "./AuthFormComponent.types";
import "./AuthFormComponent.scss";
import {BEM} from "../../libs";

export function AuthFormComponent(props: IAuthFormComponentProps) {
    const bm = new BEM("AuthForm-component", {});
    bm.Append(props.className);
    const Component = props.component || "div";
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <
                // @ts-ignore
                Component onSubmit={props.onSubmit} className={bm.Children("wrapper")}>
                {props.children}
            </Component>
        </div>
    );
}
