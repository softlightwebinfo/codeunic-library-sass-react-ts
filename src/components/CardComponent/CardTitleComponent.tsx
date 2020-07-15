import * as React from "react";
import {ICardTitleComponentProps} from "./CardTitleComponent.types";
import "./CardTitleComponent.scss";
import {BEM} from "../../libs";
import {TypographyComponent} from "../..";

export function CardTitleComponent(props: ICardTitleComponentProps) {
    const bm = new BEM("CardTitle-component", {});
    return (
        <TypographyComponent
            style={props.style}
            className={bm.toString()}
            component={"h4"}
            variant={"h6"}
        >
            {props.title}
        </TypographyComponent>
    );
}
