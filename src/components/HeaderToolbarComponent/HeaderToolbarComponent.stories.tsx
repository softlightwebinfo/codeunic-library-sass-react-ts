import React from "react";
import {HeaderToolbarComponent} from './HeaderToolbarComponent';
import {IconComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|HeaderToolbar"
};

export const Default = () => (
    <HeaderToolbarComponent
        onClick={(_, index) => console.log(index)}
        title={"Contacts"}
        search={{
            value: "",
            onChange: (e) => console.log(e),
            placeholder: "Search"
        }}
        icons={[
            <IconComponent icon={"setting"}/>
        ]}
    />
);
