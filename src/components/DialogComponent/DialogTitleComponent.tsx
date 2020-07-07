import * as React from "react";
import {IDialogTitleComponentProps} from "./DialogTitleComponent.types";
import "./DialogTitleComponent.scss";
import {BEM} from "../../libs";
import {TypographyComponent} from "../..";

export function DialogTitleComponent(props: IDialogTitleComponentProps) {
    const bm = new BEM("DialogTitle-component", {});
    return (
        <div
            className={bm.toString()}
        >
            <TypographyComponent component={"h2"} variant={"h6"}>{props.children}</TypographyComponent>
        </div>
    );
}
