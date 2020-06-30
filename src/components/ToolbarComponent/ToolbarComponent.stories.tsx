import React from "react";
import {ToolbarComponent} from './ToolbarComponent';
import {ButtonIconComponent, IconComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|Toolbar"
};

export const Default = () => (
    <ToolbarComponent>
        <ButtonIconComponent>
            <IconComponent icon={"menu"}/>
        </ButtonIconComponent>
    </ToolbarComponent>
);
