import * as React from "react";
import {ICardLayoutProps} from "./CardLayout.types";
import "./CardLayout.scss";
import {BEM, CardComponent, CardContentComponent, CardTitleComponent} from "../..";

export function CardLayout(props: ICardLayoutProps) {
    const bem = new BEM("CardLayout-layout", {});
    bem.Append(props.className);
    return (
        <CardComponent style={props.style} className={bem.toString()}>
            <CardContentComponent>
                <CardTitleComponent title={props.title}/>
                {props.children}
            </CardContentComponent>
        </CardComponent>
    );
}
