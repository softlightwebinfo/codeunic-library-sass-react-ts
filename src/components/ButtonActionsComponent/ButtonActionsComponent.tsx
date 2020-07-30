import * as React from "react";
import {IButtonActionsComponentProps} from "./ButtonActionsComponent.types";
import "./ButtonActionsComponent.scss";
import {BEM} from "../../libs";

export function ButtonActionsComponent(props: IButtonActionsComponentProps) {
    const bm = new BEM("ButtonActions-component", {});
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            {React.Children.map(props.children, (child, index) => {
                if(!child) return null;
                return (
                    <div className={bm.Children("item")} key={index}>
                        {child}
                    </div>
                );
            })}
        </div>
    );
}
