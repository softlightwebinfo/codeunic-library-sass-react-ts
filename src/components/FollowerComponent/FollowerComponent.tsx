import * as React from "react";
import {IFollowerComponentProps} from "./FollowerComponent.types";
import "./FollowerComponent.scss";
import {BEM} from "../../libs";
import {AvatarComponent, ButtonIconComponent, IconComponent, ListComponent, TypographyComponent} from "../..";

export function FollowerComponent(props: IFollowerComponentProps) {
    const bm = new BEM("Follower-component", {});
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <TypographyComponent className={bm.Children("label")} component={"p"} variant={"body2"}>{props.label}</TypographyComponent>
            <ListComponent horizontal>
                {props.avatars.map((item, index) => (
                    <AvatarComponent {...item} className={[bm.Children("avatar"), item.className].join(" ")} src={item.src} mini key={index}>
                        {item.children}
                    </AvatarComponent>
                ))}
                <ButtonIconComponent onClick={props.onClick} className={bm.Children("plus")} action hover>
                    <IconComponent icon={"plus"}/>
                </ButtonIconComponent>
            </ListComponent>
        </div>
    );
}
