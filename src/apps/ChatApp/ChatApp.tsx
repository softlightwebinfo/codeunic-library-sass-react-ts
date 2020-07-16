import * as React from "react";
import {IChatAppProps} from "./ChatApp.types";
import "./ChatApp.scss";
import {BEM, ScrollbarComponent, SidebarComponent, SidebarMenuComponent, SidebarMenuItemChat, SidebarMenuItemGroup, SidebarMenuItemHeader, SidebarMenuItemTitle} from "../..";
import ChatAppContext from "../../context/ChatAppContext";
import {IChatAppState} from "../../Interfaces/IChatAppState";
import {ChatLayout} from "../..";


export class ChatApp extends React.Component<IChatAppProps, IChatAppState> {
    public state: IChatAppState = {};

    render() {
        const bem = new BEM("Chat-app", {});
        bem.Append(this.props.className);
        return (
            <ChatAppContext.Provider value={this.state}>
                <div className={bem.toString()} style={this.props.style}>
                    <SidebarComponent>
                        <ScrollbarComponent>
                            <SidebarMenuComponent
                                onClick={(data) => {
                                    console.log(data)
                                }}
                                menu={[
                                    new SidebarMenuItemHeader("Back to Home", "alarm"),
                                    new SidebarMenuItemTitle("Chat Group", () => {
                                        alert();
                                    }),
                                    new SidebarMenuItemGroup("#General", "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"),
                                    new SidebarMenuItemGroup("#Video Responsive", "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"),
                                    new SidebarMenuItemGroup("#500rs", "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"),
                                    new SidebarMenuItemGroup("#warehouse", "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"),
                                    new SidebarMenuItemTitle("Direct Chats", () => {
                                    }),
                                    new SidebarMenuItemChat("John Doe", "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", "online", 10, true),
                                    new SidebarMenuItemChat("John Doe", "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", "online", 10),
                                    new SidebarMenuItemChat("John Doe", "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", "online", 10),
                                    new SidebarMenuItemChat("John Doe", "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", "offline", 10),
                                    new SidebarMenuItemChat("John Doe", "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", "online", 10),
                                    new SidebarMenuItemChat("John Doe", "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", "away", 10),
                                    new SidebarMenuItemChat("John Doe", "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", "offline", 10),
                                    new SidebarMenuItemChat("John Doe", "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", "online", 10),
                                    new SidebarMenuItemChat("John Doe", "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", "online", 10),
                                    new SidebarMenuItemChat("John Doe", "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", "online", 10),
                                    new SidebarMenuItemChat("John Doe", "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", "online", 10),
                                    new SidebarMenuItemChat("John Doe", "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", "online", 10),
                                    new SidebarMenuItemChat("John Doe", "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", "online", 10),
                                    new SidebarMenuItemChat("John Doe", "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", "online", 10),
                                    new SidebarMenuItemChat("John Doe", "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", "online", 10),
                                ]}
                            />
                        </ScrollbarComponent>
                    </SidebarComponent>
                    <ChatLayout/>
                </div>
            </ChatAppContext.Provider>
        );
    }
}
