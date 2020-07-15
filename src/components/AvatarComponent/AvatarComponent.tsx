import * as React from "react";
import {IAvatarComponentProps} from "./AvatarComponent.types";
import "./AvatarComponent.scss";
import {BEM} from "../../libs";

export function AvatarComponent(props: IAvatarComponentProps) {
    const bm = new BEM("Avatar-component", {});
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            {props.children}
        </div>
    );
}
