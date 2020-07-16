import React from "react";
import {GroupWindowLayout} from './GroupWindowLayout';
import {ChatFooterLayout, ChatHeaderLayout} from "../..";
// @ts-ignore
export default {
    title: "Layouts|GroupWindow"
};

export const Default = () => (
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
);
