import React from "react";
import {ProfileSidebarLayout} from './ProfileSidebarLayout';
// @ts-ignore
export default {
    title: "Layouts|ProfileSidebar"
};

export const Default = () => (
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
);
