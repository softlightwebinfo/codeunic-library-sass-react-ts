import * as React from "react";
import {IListInfoComponentProps} from "./ListInfoComponent.types";
import "./ListInfoComponent.scss";
import {BEM} from "../../libs";
import {TypographyComponent} from "../..";

export function ListInfoComponent(props: IListInfoComponentProps) {
    const bm = new BEM("ListInfo-component", {});
    bm.Append(props.className);
    return (
        <ul
            style={props.style}
            className={bm.toString()}
        >
            {props.data.map((item, index) => (
                <li className={bm.Children("item")} key={index}>
                    <TypographyComponent component={"span"} variant={"body1"}>{item.title}</TypographyComponent>
                    <TypographyComponent className={bm.Children("item__value")} component={"span"} variant={"body2"} color={"gray"}>{item.value}</TypographyComponent>
                </li>
            ))}
        </ul>
    );
}
