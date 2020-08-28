import * as React from "react";
import {IQuickLinkComponentProps} from "./QuickLinkComponent.types";
import "./QuickLinkComponent.scss";
import {BEM} from "../../libs";
import {IconComponent, TypographyComponent} from "../..";

export function QuickLinkComponent(props: IQuickLinkComponentProps) {
    const bm = new BEM("Quick-link-component", {});
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <IconComponent icon={props.icon}/>
            <TypographyComponent className={bm.Children("title")}>{props.title}</TypographyComponent>
        </div>
    );
}
