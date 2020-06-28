import React from "react";
import {ButtonGroupComponent} from './ButtonGroupComponent';
import {ButtonComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|ButtonGroup"
};

export const Default = () => (
    <ButtonGroupComponent>
        <ButtonComponent>One</ButtonComponent>
        <ButtonComponent>Two</ButtonComponent>
        <ButtonComponent>Three</ButtonComponent>
    </ButtonGroupComponent>
);
