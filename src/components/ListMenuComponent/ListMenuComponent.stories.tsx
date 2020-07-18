import React from "react";
import {ListMenuComponent} from './ListMenuComponent';

// @ts-ignore
export default {
    title: "Components|ListMenu"
};

export const Default = () => (
    <ListMenuComponent
        active={0}
        data={[
            {label: "All"},
            {label: "Company"},
            {label: "Client"},
            {label: "Staff"},
        ]}
    />
);
