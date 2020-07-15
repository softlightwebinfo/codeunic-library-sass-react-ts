import * as React from "react";
import {IItemDotLayoutProps} from "./ItemDotLayout.types";
import "./ItemDotLayout.scss";
import {BEM, DotComponent, ListComponent, TypographyComponent} from "../..";

export function ItemDotLayout(props: IItemDotLayoutProps) {
    const bem = new BEM("ItemDot-layout", {});
    bem.Append(props.className);
    return (
        <ListComponent>
            {props.data.map((item, index) => (
                <p key={index} className={bem.Children("item", item.className)} style={item.style}>
                    <DotComponent color={item.color}/>
                    <TypographyComponent variant={"body1"} component={"span"}>{item.title}</TypographyComponent>
                    <TypographyComponent variant={"body2"} component={"span"}>{item.subTitle}</TypographyComponent>
                </p>
            ))}
        </ListComponent>
    );
}
