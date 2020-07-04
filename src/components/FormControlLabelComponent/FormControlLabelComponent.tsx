import * as React from "react";
import {IFormControlLabelComponentProps} from "./FormControlLabelComponent.types";
import "./FormControlLabelComponent.scss";
import {BEM} from "../../libs";
import {TypographyComponent} from "../..";

export function FormControlLabelComponent(props: IFormControlLabelComponentProps) {
    const bm = new BEM("FormControlLabel-component", {});
    return (
        <label
            className={bm.toString()}
        >
            {React.cloneElement(props.control, {
                value: props.value,
            })}
            <TypographyComponent
                color={props.color}
                variant={"body1"}
                component={"span"}
            >
                {props.label}
            </TypographyComponent>
        </label>
    );
}
