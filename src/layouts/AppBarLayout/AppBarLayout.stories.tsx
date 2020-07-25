import React from "react";
import {AppBarLayout} from './AppBarLayout';

// @ts-ignore
export default {
    title: "Layouts|AppBar"
};

export const Default = () => (
    <AppBarLayout
        title={"Dreamguy's Technologies"}
        logo={"https://pluspng.com/img-png/png-logo-design-fancy-png-logo-design-91-on-professional-logo-design-with-png-logo-design-734.png"}
        routeLogo={"/"}
        search={{
            placeholder: "Search here",
            value: "",
            onChange: () => {
            }
        }}
        notifications={[...new Array(30)].map((_, index) => ({
            avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
            date: "23-10-19",
            description: "Will you tell me something about yourself?",
            name: `Name ${index}`
        }))}
        messages={[...new Array(30)].map((_, index) => ({
            avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
            date: "23-10-19",
            description: "Will you tell me something about yourself?",
            name: `Name ${index}`
        }))}
        langData={[
            {value: 1, label: "English", icon: <i/>},
            {value: 2, label: "Spanish", icon: <i/>},
            {value: 3, label: "German", icon: <i/>},
            {value: 4, label: "French", icon: <i/>},
        ]}
        menuLogin={[
            {value: 1, label: "My profile", icon: <i/>},
            {value: 2, label: "Settings", icon: <i/>},
            {value: 3, label: "Logout", icon: <i/>},
        ]}
        isLogin={true}
        login={{
            avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
            name: "Administrator",
            status: "online",
        }}
        lang={2}
    />
);
