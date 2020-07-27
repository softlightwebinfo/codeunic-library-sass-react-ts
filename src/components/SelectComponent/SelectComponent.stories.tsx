import React from "react";
import {SelectComponent} from './SelectComponent';

// @ts-ignore
export default {
    title: "Components|Select"
};

export const Default = () => (
    <SelectComponent
        value={"example"}
        options={[
            {value: "test", label: "Test"},
            {value: "example", label: "Example"},
            {value: "value", label: "Value"},
        ]}
    />
);
