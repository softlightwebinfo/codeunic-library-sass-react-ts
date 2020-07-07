import * as React from "react";
import {IOverlayComponentProps} from "./OverlayComponent.types";
import "./OverlayComponent.scss";
import {BEM} from "../../libs";
import {PortalComponent} from "../..";

export function OverlayComponent(props: IOverlayComponentProps) {
    const bm = new BEM("Overlay-component", {
        open: props.open,
    });

    const content = (
        <div
            className={bm.toString()}
        >
            {props.children}
        </div>
    );
    if (!props.portal) {
        return content;
    }
    return (
        <PortalComponent>
            {content}
        </PortalComponent>
    );
}
