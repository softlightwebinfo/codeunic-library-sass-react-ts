import React from "react";
import {DashtInfoLayout} from './DashtInfoLayout';
import {AvatarListLayout} from "../..";

// @ts-ignore
export default {
    title: "Layouts|DashtInfo"
};

export const Default = () => (
    <DashtInfoLayout
        title={"You are working from home today"}
        icon={"alarm"}
    >
        <AvatarListLayout
            data={[
                {children: "RM"},
                {children: "MD"},
                {children: "AL"},
            ]}
        />
    </DashtInfoLayout>
);

export const Content = () => (
    <DashtInfoLayout
        title={"You are working from home today"}
        icon={"alarm"}
        content={(props) => (
            <a href="/">
                {props.title}
            </a>
        )}
    >
        <AvatarListLayout
            data={[
                {children: "RM"},
                {children: "MD"},
                {children: "AL"},
            ]}
        />
    </DashtInfoLayout>
);
