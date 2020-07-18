import * as React from "react";
import {IContentToolbarComponentProps} from "./ContentToolbarComponent.types";
import "./ContentToolbarComponent.scss";
import {BEM} from "../../libs";

export function ContentToolbarComponent(props: IContentToolbarComponentProps) {
    const bm = new BEM("ContentToolbar-component", {});
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <div className={bm.Children("wrap")}>
                <div className={bm.Children("inner")}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
