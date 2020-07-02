import * as React from "react";
import {IListItemTextComponentProps} from "./ListItemTextComponent.types";
import "./ListItemTextComponent.scss";
import {BEM} from "../../libs";
import {TypographyComponent} from "../..";

export function ListItemTextComponent(props: IListItemTextComponentProps) {
    const bm = new BEM("ListItemText-component", {
        multiline: !!(props.primary && props.secondary),
    });
    return (
        <div
            className={bm.toString()}
        >
            <TypographyComponent className={"ListItemText-component__primary"} variant={"body1"} component={"span"} color={"text-primary"}>
                {props.primary}
            </TypographyComponent>
            {props.secondary && (
                <TypographyComponent className={"ListItemText-component__secondary"} variant={"body2"} component={"p"} color={"text-secondary"}>
                    {props.secondary}
                </TypographyComponent>
            )}
        </div>
    );
}
