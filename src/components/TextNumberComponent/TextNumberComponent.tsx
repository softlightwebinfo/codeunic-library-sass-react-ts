import * as React from "react";
import {ITextNumberComponentProps} from "./TextNumberComponent.types";
import "./TextNumberComponent.scss";
import {BEM} from "../../libs";
import {TypographyComponent} from "../..";

export function TextNumberComponent(props: ITextNumberComponentProps) {
    const bm = new BEM("TextNumber-component", {
        danger: props.number <= 0,
        success: props.number > 0,
    });
    return (
        <TypographyComponent
            variant={"body2"}
            component={"span"}
            style={props.style}
            className={bm.toString()}
        >
            {(props.data && props.data(props)) || props.number.toString()}
        </TypographyComponent>
    );
}
