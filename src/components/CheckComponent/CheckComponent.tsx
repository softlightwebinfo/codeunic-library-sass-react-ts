import * as React from "react";
import {ICheckComponentProps} from "./CheckComponent.types";
import "./CheckComponent.scss";
import {BEM} from "../../libs";
import {IconComponent} from "../..";

export function CheckComponent(props: ICheckComponentProps) {
    const bm = new BEM("Check-component", {
        check: props.check,
    });
    bm.Append(props.className);
    return (
        <div
            onClick={props.onClick}
            style={props.style}
            className={bm.toString()}
        >
            <IconComponent className={bm.Children("icon")} icon={"tick"}/>
        </div>
    );
}
