import * as React from "react";
import {ISidebarMenuComponentProps} from "./SidebarMenuComponent.types";
import "./SidebarMenuComponent.scss";
import {BEM} from "../../libs";
import {SidebarMenuItemChat, SidebarMenuItemGroup, SidebarMenuItemHeader, SidebarMenuItemTitle} from "../../models";
import {SidebarMenuItemComponent} from "./SidebarMenuItemComponent";
import {AvatarComponent, IconComponent} from "../..";

export function SidebarMenuComponent(props: ISidebarMenuComponentProps) {
    const bm = new BEM("SidebarMenu-component", {});
    const getItem = (item, index) => {
        switch (item.constructor.name) {
            case "SidebarMenuItemHeader": {
                let data = item as SidebarMenuItemHeader;
                return (
                    <SidebarMenuItemComponent
                        name={data.name}
                        icon={<IconComponent icon={data.icon}/>}
                    />
                );
            }
            case "SidebarMenuItemGroup": {
                let data = item as SidebarMenuItemGroup;
                return (
                    <SidebarMenuItemComponent
                        name={data.name}
                        icon={<AvatarComponent mini src={data.icon}>RM</AvatarComponent>}
                    />
                );
            }
            case "SidebarMenuItemChat": {
                let data = item as SidebarMenuItemChat;
                return (
                    <SidebarMenuItemComponent
                        active={data.active}
                        name={data.name}
                        icon={<AvatarComponent status={data.online} mini src={data.icon}>RM</AvatarComponent>}
                        number={data.number}
                    />
                );
            }
            case "SidebarMenuItemTitle": {
                let data = item as SidebarMenuItemTitle;
                return (
                    <SidebarMenuItemComponent
                        header
                        name={data.name}
                        onClickPlus={data.onClick}
                        plus
                    />
                );
            }
        }
    };
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <ul className={bm.Children("list")}>
                {props.menu.map((item, index) => {
                    return (
                        <li key={index} onClick={() => props.onClick(item, index)}>
                            {getItem(item, index)}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
