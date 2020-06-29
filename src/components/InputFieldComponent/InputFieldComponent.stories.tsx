import React from "react";
import {InputFieldComponent} from './InputFieldComponent';

// @ts-ignore
export default {
    title: "Components|InputField"
};

export const Default = () => (
    <InputFieldComponent
        onChange={e => console.log(e.target)}
        placeholder={"Placeholder"}
    />
);
