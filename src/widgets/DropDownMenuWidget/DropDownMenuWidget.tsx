import * as React from "react";
import {IProfileWidgetProps} from "./ProfileWidget.types";
import "./ProfileWidget.scss";
import {BEM} from "../../libs";
import {AvatarComponent, ButtonIconComponent, DropdownComponent, IconComponent, TypographyComponent} from "../..";

export function ProfileWidget(props: IProfileWidgetProps) {
    const bem = new BEM("Profile-widget", {});
    bem.Append(props.className);
    return (
        <div className={bem.toString()}>
            <AvatarComponent className={bem.Children("avatar")} big src={props.avatar}>{props.name.slice(0, 2).toUpperCase()}</AvatarComponent>
            <DropdownComponent
                className={bem.Children("settings")}
                onChange={props.onChange}
                trigger={<ButtonIconComponent hover className={bem.Children("trigger")}><IconComponent icon={"more_vert"}/></ButtonIconComponent>}
                data={[
                    {label: "Edit", icon: <IconComponent style={{width: 15, height: 15}} icon={"pencil"}/>, value: "1"},
                    {label: "Delete", icon: <IconComponent style={{width: 15, height: 15}} icon={"trash"}/>, value: "2"},
                ]}
            />
            <TypographyComponent className={bem.Children('name')} component={"h4"} variant={"h5"} color={"text-secondary"}>{props.name}</TypographyComponent>
            <TypographyComponent className={bem.Children('category')} component={"span"} variant={"caption"} color={"gray"}>{props.category}</TypographyComponent>
        </div>
    );
}
