import * as React from "react";
import {ITypographyComponentProps} from "./TypographyComponent.types";
import "./TypographyComponent.scss";
import {BEM} from "../../libs";

export function TypographyComponent(props: ITypographyComponentProps) {
    const mapping = {h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6', subtitle1: 'h6', subtitle2: 'h6', body1: 'p', body2: 'p', div: 'div'};
    const bm = new BEM("Typography-component", {
        'gutter-bottom': props.gutterBottom,
        'no-wrap': props.noWrap,
        'color': props.color,
        display: props.display,
        align: props.align,
        [props.variant || "div"]: !!props.variant,
    });
    let Component: any = props.component || props.variant || "div";
    Component = mapping[Component] || "div";
    bm.Append(props.className);
    return (
        <Component
            onClick={props.onClick}
            style={props.style}
            className={bm.toString()}
        >
            {props.children}
        </Component>
    );
}
