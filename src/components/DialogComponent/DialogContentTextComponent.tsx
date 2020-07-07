import * as React from "react";
import {IDialogContentTextProps} from "./DialogContentText.types";
import "./DialogContentText.scss";
import {BEM} from "../../libs";
import {TypographyComponent} from "../..";

export function DialogContentTextComponent(props: IDialogContentTextProps) {
    const bm = new BEM("DialogContentText-component", {});
    return (
        <TypographyComponent
            component={"p"}
            variant={"body1"}
            color={"text-secondary"}
            className={bm.toString()}
        >
            {props.children}
        </TypographyComponent>
    );
}
