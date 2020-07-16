import * as React from "react";
import {IChatLayoutProps} from "./ChatLayout.types";
import "./ChatLayout.scss";
import {BEM, ChatFooterLayout, GroupBoxLayout, GroupWindowLayout} from "../..";
import {ChatHeaderLayout} from "../..";

export function ChatLayout(props: IChatLayoutProps) {
    const bem = new BEM("Chat-layout", {});
    bem.Append(props.className);
    return (
        <GroupBoxLayout
            view={(
                <GroupWindowLayout
                    header={
                        <ChatHeaderLayout
                            title={"MIKE LITORUS"}
                            name={"MIKE LITORUS"}
                            subTitle={"Last seen today at 7:50 AM"}
                            src={"https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg"}
                        />
                    }
                    content={<div></div>}
                    footer={
                        <ChatFooterLayout/>
                    }
                />
            )}
            sidebar={(
                <aside></aside>
            )}
        />
    );
}
