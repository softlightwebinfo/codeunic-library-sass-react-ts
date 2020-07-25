import React from "react";
import {LabelComponent} from './LabelComponent';

// @ts-ignore
export default {
    title: "Components|Label"
};

export const Default = () => (
    <LabelComponent
        name={"Partially Paid"}
        theme={"success"}
    />
);
