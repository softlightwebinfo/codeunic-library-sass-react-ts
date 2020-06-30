import React from "react";
import {InputSearchComponent} from './InputSearchComponent';

// @ts-ignore
export default {
    title: "Components|InputSearch"
};

export const Default = () => <InputSearchComponent
    onChange={() => console.log("Hola")}
/>;
