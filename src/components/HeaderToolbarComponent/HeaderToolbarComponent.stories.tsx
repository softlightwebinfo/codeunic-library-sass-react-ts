import React from "react";
import { HeaderToolbarComponent } from './HeaderToolbarComponent';
import { IconComponent } from "../..";

// @ts-ignore
export default {
    title: "Components|HeaderToolbar"
};

export const Default = () => (
    <HeaderToolbarComponent
        onClick={(_, index) => console.log(index)}
        icons={[
            <IconComponent style={{color: "black"}} icon={"setting"}/>
        ]}
    />
);
export const DefaultSearch = () => (
    <HeaderToolbarComponent
        onClick={(_, index) => console.log(index)}
        title={"Contacts"}
        search={{
            value: "",
            onChange: (e) => console.log(e),
            placeholder: "Search"
        }}
        icons={[
            <IconComponent style={{color: "black"}} icon={"setting"}/>
        ]}
    />
);
export const DefaultTitle = () => (
    <HeaderToolbarComponent
        onClick={(_, index) => console.log(index)}
        title={"Contacts"}
        search={{
            value: "",
            onChange: (e) => console.log(e),
            placeholder: "Search"
        }}
        icons={[
            <IconComponent style={{color: "black"}} icon={"setting"}/>
        ]}
    />
);
export const DefaultUser = () => (
    <HeaderToolbarComponent
        onClick={(_, index) => console.log(index)}
        title={"Contacts"}
        search={{
            value: "",
            onChange: (e) => console.log(e),
            placeholder: "Search"
        }}
        icons={[
            <IconComponent style={{color: "black"}} icon={"setting"}/>,
        ]}
    />
);
