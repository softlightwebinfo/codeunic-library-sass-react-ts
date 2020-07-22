import * as React from "react";
import "./ButtonGroupComponent.scss";
import {IButtonGroupComponentProps} from "./ButtonGroupComponent.types";

export function ButtonGroupComponent(props: IButtonGroupComponentProps) {
    const classNames = ["ButtonGroup-component"];
    return (
        <div
            className={classNames.join(" ")}
        >
            {React.Children.map(props.children, (Child, index) => {
                // @ts-ignore
                return React.cloneElement(Child, {
                    grouped: true,
                    onClick: e => props.onClick(e, index),
                });
            })}
        </div>
    );
}
