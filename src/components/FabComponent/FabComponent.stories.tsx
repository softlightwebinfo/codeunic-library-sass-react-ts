import React from "react";
import {FabComponent} from './FabComponent';
import {IconComponent} from "../..";

// @ts-ignore
export default {
    title: "Fab|Fab"
};

export const Default = () => (
    <FabComponent theme="primary" icon={"alarm"}/>
);

export const Children = () => (
    <FabComponent theme="primary">
        <IconComponent icon={"alarm"}/>
    </FabComponent>
);
export const Extended = () => (
    <FabComponent theme="primary" icon={"alarm"}>
        Expanded
    </FabComponent>
);
