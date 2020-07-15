import * as React from "react";
import {IDashtInfoLayoutProps} from "./DashtInfoLayout.types";
import "./DashtInfoLayout.scss";
import {BEM, DashCardComponent, IconComponent, TypographyComponent} from "../..";

export function DashtInfoLayout(props: IDashtInfoLayoutProps) {
    const bem = new BEM("DashtInfo-layout", {});
    bem.Append(props.className);
    return (
        <DashCardComponent className={bem.toString()}>
            <IconComponent className={bem.Children("icon")} icon={props.icon}/>
            {
                // @ts-ignore
                (props.content && React.cloneElement(props.content(props), {className: bem.Children("content")})) || (
                    <TypographyComponent component={"p"} variant={"body1"} className={bem.Children("content")}>{props.title}</TypographyComponent>
                )}
            {props.children}
        </DashCardComponent>
    );
}
