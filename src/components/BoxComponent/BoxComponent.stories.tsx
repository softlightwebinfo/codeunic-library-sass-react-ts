import React from "react";
import {BoxComponent} from './BoxComponent';

// @ts-ignore
export default {
    title: "Components/Box"
};

export const Default = () => (
    <BoxComponent
        title={"Adding Ressources"}
        description={"How to add new resources to the sidebar"}
        image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
    />
);
