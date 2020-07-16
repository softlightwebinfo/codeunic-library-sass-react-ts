import * as React from "react";
import {IChatAppProps} from "./ChatApp.types";
import "./ChatApp.scss";
import {BEM, SidebarComponent} from "../..";
import ChatAppContext from "../../context/ChatAppContext";
import {IChatAppState} from "../../Interfaces/IChatAppState";

export class ChatApp extends React.Component<IChatAppProps, IChatAppState> {
    public state: IChatAppState = {};

    render() {
        const bem = new BEM("Chat-app", {});
        bem.Append(this.props.className);
        return (
            <ChatAppContext.Provider value={this.state}>
                <div className={bem.toString()} style={this.props.style}>
                    <SidebarComponent>

                    </SidebarComponent>
                </div>
            </ChatAppContext.Provider>
        );
    }
}
