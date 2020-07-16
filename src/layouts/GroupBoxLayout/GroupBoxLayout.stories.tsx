import React from "react";
import {GroupBoxLayout} from './GroupBoxLayout';
import {ChatFooterLayout, ChatHeaderLayout, GroupWindowLayout} from "../..";
import {ChatSidebarLayout} from "../ChatSidebarLayout/ChatSidebarLayout";
// @ts-ignore
export default {
    title: "Layouts|GroupBox"
};

export const Default = () => (
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
            <ChatSidebarLayout/>
        )}
    />
);
