import * as React from "react";
import {ICardWidgetLayoutProps} from "./CardWidgetLayout.types";
import "./CardWidgetLayout.scss";
import {BEM, CardComponent, CardContentComponent, IconComponent, TypographyComponent} from "../..";

export function CardWidgetLayout(props: ICardWidgetLayoutProps) {
    const bem = new BEM("CardWidget-layout", {});
    bem.Append(props.className);
    return (
        <CardComponent className={bem.toString()} style={props.style}>
            <CardContentComponent>
                <span className={bem.Children("icon")}><IconComponent icon={props.icon}/></span>
                <div className={bem.Children("info")}>
                    <TypographyComponent component={"h3"} variant={"h4"}>{props.title}</TypographyComponent>
                    <TypographyComponent component={"span"}  variant={"body1"}>{props.subTitle}</TypographyComponent>
                </div>
            </CardContentComponent>
        </CardComponent>
    );
}
