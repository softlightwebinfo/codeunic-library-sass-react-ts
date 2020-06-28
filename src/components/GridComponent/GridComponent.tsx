import * as React from "react";
import {IGridComponentProps} from "./GridComponent.types";
import "./GridComponent.scss";
import {BEM} from "../../libs";

export function GridComponent(props: IGridComponentProps) {
    let bm = new BEM("Grid-component", {
        direction: props.direction,
        spacing: (props.spacing || 0).toString(),
        xs: props.xs ? props.xs.toString() : false,
        sm: props.sm ? props.sm.toString() : false,
        md: props.md ? props.md.toString() : false,
        lg: props.lg ? props.lg.toString() : false,
        xl: props.xl ? props.xl.toString() : false,
        justify: props.justify,
        'align-content': props.alignContent,
        'align-items': props.alignItems,
        'zeroMinWidth': props.zeroMinWidth,
        wrap: props.wrap,
    });
    let bmContainer = new BEM(`Grid-container`, {});
    let bmItem = new BEM(`Grid-item`, {});
    let classNames = [bm.toString()];
    if (props.container) {
        classNames.push(bmContainer.toString());
    }
    if (props.item) {
        classNames.push(bmItem.toString());
    }
    return (
        <div
            className={classNames.join(" ")}
        >
            {props.children}
        </div>
    );
}
