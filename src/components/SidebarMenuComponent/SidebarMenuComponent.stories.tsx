import React from "react";
import {SidebarMenuComponent} from './SidebarMenuComponent';
import {SidebarMenuItemChat, SidebarMenuItemGroup, SidebarMenuItemHeader, SidebarMenuItemTitle} from "../../models";

// @ts-ignore
export default {
    title: "Components|SidebarMenu"
};

export const Default = () => (
    <SidebarMenuComponent
        menu={[
            new SidebarMenuItemHeader("Back to Home", "alarm"),
            new SidebarMenuItemTitle("Chat Group", () => {
            }),
            new SidebarMenuItemGroup("#General", "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"),
            new SidebarMenuItemGroup("#Video Responsive", "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"),
            new SidebarMenuItemGroup("#500rs", "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"),
            new SidebarMenuItemGroup("#warehouse", "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"),
            new SidebarMenuItemTitle("Direct Chats", () => {
            }),
            new SidebarMenuItemChat("John Doe", "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", "online", 10),
        ]}
    />
);
