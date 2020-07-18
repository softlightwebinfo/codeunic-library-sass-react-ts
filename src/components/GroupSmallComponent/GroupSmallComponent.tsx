import * as React from "react";
import {IGroupSmallComponentProps} from "./GroupSmallComponent.types";
import "./GroupSmallComponent.scss";
import {BEM} from "../../libs";
import {TypographyComponent} from "../..";

export function GroupSmallComponent(props: IGroupSmallComponentProps) {
    const bm = new BEM("GroupSmall-component", {});
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <TypographyComponent component={"h2"} variant={"body1"}>{props.name}</TypographyComponent>
            <small>
                {props.data.map((item, index) => {
                    return (
                        <span key={index} className={bm.Children("item")}>
                            <b>{item.number}</b>
                            {item.label}
                            {props.data.length - 1 != index ? ", " : null}
                        </span>
                    );
                })}
            </small>
        </div>
    );
}
