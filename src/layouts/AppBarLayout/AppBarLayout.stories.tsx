import React from "react";
import {AvatarListLayout} from './AvatarListLayout';

// @ts-ignore
export default {
    title: "Layouts|AvatarList"
};

export const Default = () => (
    <AvatarListLayout
        data={[
            {children: "R"},
            {children: "RM"},
            {children: "ER"},
            {children: "ES"},
        ]}
    />
);
