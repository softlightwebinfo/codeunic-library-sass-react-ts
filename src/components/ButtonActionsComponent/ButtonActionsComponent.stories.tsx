import React from "react";
import {ButtonActionsComponent} from './ButtonActionsComponent';
import {BadgeComponent, ButtonIconComponent, IconComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|ButtonActions"
};

export const Default = () => (
    <ButtonActionsComponent>
        <ButtonIconComponent>
            <BadgeComponent
                badgeContent={4}
                theme="secondary"
            >
                <IconComponent icon="alarm"/>
            </BadgeComponent>
        </ButtonIconComponent>
        <ButtonIconComponent>
            <BadgeComponent
                badgeContent={10}
                theme="secondary"
            >
                <IconComponent icon="menu"/>
            </BadgeComponent>
        </ButtonIconComponent>
    </ButtonActionsComponent>
);
