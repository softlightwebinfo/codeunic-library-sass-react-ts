import React from "react";
import {TabComponent} from './TabComponent';

// @ts-ignore
export default {
    title: "Components|Tab"
};

export const Default = () => (
    <TabComponent
        active={1}
        tabs={["Calls", "Profile"]}
    >
        <div>Calls</div>
        <div>Profile</div>
    </TabComponent>
);
