import React from "react";
import {ScrollbarComponent} from './ScrollbarComponent';
import {BoxxComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|Scrollbar"
};

export const Default = () => (
    <BoxxComponent style={{backgroundColor: "white"}}>
        <ScrollbarComponent style={{width: "100%", height: 200}}>
            <p>Hello world!</p>
            <p>Hello world!</p>
            <p>Hello world!</p>
            <p>Hello world!</p>
            <p>Hello world!</p>
            <p>Hello world!</p>
            <p>Hello world!</p>
            <p>Hello world!</p>
            <p>Hello world!</p>
            <p>Hello world!</p>
            <p>Hello world!</p>
        </ScrollbarComponent>
    </BoxxComponent>
);
