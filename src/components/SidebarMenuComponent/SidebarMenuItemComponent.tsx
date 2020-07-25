import {ISidebarMenuItemComponentProps} from "./SidebarMenuComponent.types";
import {BEM} from "../../libs";
import * as React from "react";
import {BadgeComponent, ButtonIconComponent, IconComponent, isUndef, TypographyComponent} from "../..";

export const SidebarMenuItemComponent = (props: ISidebarMenuItemComponentProps) => {
    const bm = new BEM("SidebarMenuItem-component", {
        active: props.active,
    });
    bm.Append(props.className);
    return (
        <a className={bm.toString()} style={props.style} onClick={props.onClick}>
            {!isUndef(props.icon) && React.cloneElement(props.icon, {className: bm.Children("icon")})}
            <TypographyComponent color={props.header ? "text-primary" : undefined} component={"span"} variant={"caption"}>{props.name}</TypographyComponent>
            {!isUndef(props.number) && (<BadgeComponent className={bm.Children("badge")} badgeContent={props.number}/>)}
            {props.plus && (
                <ButtonIconComponent className={bm.Children("plus")} onClick={props.onClickPlus}>
                    <IconComponent style={{width: 15, height: 15}} icon={"plus"}/>
                </ButtonIconComponent>
            )}
            {props.arrow && (
                <IconComponent className={bm.Children("arrow")} style={{width: 15, height: 15, marginLeft: "auto"}} icon={"arrowBottom"}/>
            )}
        </a>
    )
};
