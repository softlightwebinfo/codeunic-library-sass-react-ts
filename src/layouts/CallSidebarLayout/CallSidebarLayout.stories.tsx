import React from "react";
import {CallSidebarLayout} from './CallSidebarLayout';
// @ts-ignore
export default {
    title: "Layouts|CallSidebar"
};

export const Default = () => (
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
);
