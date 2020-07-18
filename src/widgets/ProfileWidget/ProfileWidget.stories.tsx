import React from "react";
import {ProfileWidget} from './ProfileWidget';
import {GridComponent} from "../..";
import {number, withKnobs} from "@storybook/addon-knobs";
import {ISpacing} from "../../Interfaces/ISpacing";

// @ts-ignore
export default {
    title: "Widgets|ProfileWidget",
    parameters: {
        info: {
            inline: false,

        },
    },
    decorators: [withKnobs]
};

export const Default = () => (
    <ProfileWidget
        avatar={"https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg"}
        name={"Rafa Gonzalez"}
        category={"Programmer"}
    />
);
export const Grid = () => (
    <div style={{padding: 20}}>
        <GridComponent container spacing={number("spacing", 2) as ISpacing}>
            <GridComponent item xs={12} sm={3}>
                <ProfileWidget
                    avatar={"https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg"}
                    name={"Rafa Gonzalez"}
                    category={"Programmer"}
                />
            </GridComponent>
            <GridComponent item xs={12} sm={3}>
                <ProfileWidget
                    avatar={"https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg"}
                    name={"Rafa Gonzalez"}
                    category={"Programmer"}
                />
            </GridComponent>
            <GridComponent item xs={12} sm={3}>
                <ProfileWidget
                    avatar={"https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg"}
                    name={"Rafa Gonzalez"}
                    category={"Programmer"}
                />
            </GridComponent>
            <GridComponent item xs={12} sm={3}>
                <ProfileWidget
                    avatar={"https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg"}
                    name={"Rafa Gonzalez"}
                    category={"Programmer"}
                />
            </GridComponent>
        </GridComponent>
    </div>
);
