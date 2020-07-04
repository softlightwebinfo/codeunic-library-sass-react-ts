import React from "react";
import {RadioComponent} from './RadioComponent';
import {FormControlLabelComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|Radio"
};

export const Default = () => <RadioComponent checked/>;
export const Label = () => (
    <FormControlLabelComponent control={<RadioComponent/>} color={"text-primary"} label={"Primary"}/>
);
