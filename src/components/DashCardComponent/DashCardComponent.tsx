import * as React from "react";
import {IDashCardComponentProps} from "./DashCardComponent.types";
import "./DashCardComponent.scss";
import {BEM} from "../../libs";

export function DashCardComponent(props: IDashCardComponentProps) {
    const bm = new BEM("DashCard-component", {});
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <div className="DashCard-component__container">
                {props.children}
            </div>
        </div>
    );
}
