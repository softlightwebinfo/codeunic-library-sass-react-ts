import React from "react";
import {GridMessageLayout} from './GridMessageLayout';
import {BoxxComponent} from "../..";

// @ts-ignore
export default {
    title: "Layouts|GridMessage"
};

export const Default = () => (
    <BoxxComponent>
        <GridMessageLayout
            avatarText={"EL"}
            message={"Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support."}
        />
    </BoxxComponent>
);
