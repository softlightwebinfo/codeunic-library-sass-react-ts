import React from "react";
import {ComplexGridLayout} from './ComplexGridLayout';
import {BoxxComponent} from "../..";

// @ts-ignore
export default {
    title: "Layouts|ComplexGrid"
};

export const Default = () => (
    <BoxxComponent>
        <ComplexGridLayout
            title={"Standard license"}
            subtitle={"Full resolution 1920x1080 • JPEG"}
            secondary={"ID: 1030114"}
            buttonText={"Remove"}
        />
    </BoxxComponent>
);
