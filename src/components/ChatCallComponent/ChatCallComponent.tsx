import * as React from "react";
import {IChatCallComponentProps} from "./ChatCallComponent.types";
import "./ChatCallComponent.scss";
import {BEM} from "../../libs";
import {AvatarComponent, IconComponent, TypographyComponent} from "../..";

export function ChatCallComponent(props: IChatCallComponentProps) {
    const bm = new BEM("ChatCall-component", {});
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <AvatarComponent className={bm.Children("avatar")} src={props.avatar} mini>{props.name}</AvatarComponent>
            <div className={bm.Children("body")}>
                <TypographyComponent component={"span"} variant={"body2"} style={{color: "black"}}>{props.name}</TypographyComponent>
                <TypographyComponent component={"span"} style={{fontSize: 13, marginLeft: 10}} color={"gray"}>
                    <small>{props.date}</small>
                </TypographyComponent>
                <div className={bm.Children("details")}>
                    <IconComponent icon={props.icon}/>
                    <TypographyComponent variant={"caption"} component={"span"}>{props.message}</TypographyComponent>
                </div>
            </div>
        </div>
    );
}
