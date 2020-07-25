import * as React from "react";
import {IAvatarListLayoutProps} from "./AvatarListLayout.types";
import "./AvatarListLayout.scss";
import {BEM} from "../../libs";
import {AvatarComponent, ListComponent} from "../..";

export function AvatarListLayout(props: IAvatarListLayoutProps) {
    const bem = new BEM("AvatarList-layout", {});
    bem.Append(props.className);
    return (
        <ListComponent className={bem.toString()}>
            {props.data.map((item, index) => (
                <AvatarComponent className={bem.Children("avatar")} {...item} key={index}>
                    {item.children}
                </AvatarComponent>
            ))}
        </ListComponent>
    );
}
