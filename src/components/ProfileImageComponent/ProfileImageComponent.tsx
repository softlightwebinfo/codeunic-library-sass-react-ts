import * as React from "react";
import {IProfileImageComponentProps} from "./ProfileImageComponent.types";
import "./ProfileImageComponent.scss";
import {BEM} from "../../libs";
import {ButtonIconComponent, IconComponent, TypographyComponent} from "../..";

export function ProfileImageComponent(props: IProfileImageComponentProps) {
    const bm = new BEM("ProfileImage-component", {});
    const {changeText = "Change Image"} = props;
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <div className={bm.Children("avatar")}>
                <img src={props.avatar} alt={props.title}/>
                <TypographyComponent component={"span"} className={bm.Children("change")}>{changeText}</TypographyComponent>
            </div>
            <TypographyComponent className={bm.Children("title")} component={"h3"} variant={"h5"}>{props.title}</TypographyComponent>
            <TypographyComponent component={"span"} color={"gray"} variant={"caption"}>{props.subTitle}</TypographyComponent>
            <ButtonIconComponent onClick={props.onClick} className={bm.Children("button")}>
                <IconComponent icon={"pencil"}/>
            </ButtonIconComponent>
        </div>
    );
}
