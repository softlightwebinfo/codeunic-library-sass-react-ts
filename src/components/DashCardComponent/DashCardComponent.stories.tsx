import React from "react";
import {DashCardComponent} from './DashCardComponent';
import {TypographyComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|DashCard"
};

export const Default = () => <DashCardComponent>
    <TypographyComponent>
        You are away today
    </TypographyComponent>
</DashCardComponent>;
