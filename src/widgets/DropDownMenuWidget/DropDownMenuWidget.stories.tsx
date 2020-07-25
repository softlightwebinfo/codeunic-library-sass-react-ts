import React from "react";
import {DropDownMenuWidget} from './DropDownMenuWidget';
import {withKnobs} from "@storybook/addon-knobs";

// @ts-ignore
export default {
    title: "Widgets|DropDownMenu",
    parameters: {
        info: {
            inline: false,

        },
    },
    decorators: [withKnobs]
};

export const Default = () => (
    <DropDownMenuWidget

    />
);
