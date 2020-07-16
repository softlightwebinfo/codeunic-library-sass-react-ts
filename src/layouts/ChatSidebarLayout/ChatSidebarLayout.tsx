import * as React from "react";
import {IChatSidebarLayoutProps} from "./ChatSidebarLayout.types";
import "./ChatSidebarLayout.scss";
import {BEM, CallSidebarLayout, ProfileSidebarLayout, TabComponent} from "../..";

export function ChatSidebarLayout(props: IChatSidebarLayoutProps) {
    const bem = new BEM("ChatSidebar-layout", {});
    bem.Append(props.className);
    return (
        <aside className={bem.toString()} style={props.style}>
            <TabComponent
                active={1}
                tabs={["Calls", "Profile"]}
            >
                <CallSidebarLayout
                    data={[
                        {src: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", name: "John Doe", icon: "phone", message: "You missed the call", date: "8:35 am"},
                        {src: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", name: "John Doe", icon: "phone", message: "You missed the call", date: "8:35 am"},
                        {src: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", name: "John Doe", icon: "phone", message: "You missed the call", date: "8:35 am"},
                        {line: true, date: "January 29th, 2019"},
                        {src: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", name: "John Doe", icon: "phone", message: "You missed the call", date: "8:35 am"},
                        {src: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg", name: "John Doe", icon: "phone", message: "You missed the call", date: "8:35 am"},
                    ]}
                />
                <ProfileSidebarLayout
                    title={"John Doe"}
                    subTitle={"Web Design"}
                    avatar={"https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg"}
                    data={[
                        {title: "Username:", value: "johndoe"},
                        {title: "DOB:", value: "24 July"},
                        {title: "Email:", value: "johndoe@example.com"},
                        {title: "Phone:", value: "987232989"},
                    ]}
                />
            </TabComponent>
        </aside>
    );
}
