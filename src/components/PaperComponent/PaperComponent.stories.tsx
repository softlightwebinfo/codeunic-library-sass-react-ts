import React from "react";
import {PaperComponent} from './PaperComponent';
import {BoxxComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|Paper"
};

export const Default = () => <PaperComponent/>;
export const Elevation = () => (
    <BoxxComponent>
        <div className={"separator"}>
            <PaperComponent/>
            <PaperComponent elevation={1}/>
            <PaperComponent elevation={2}/>
            <PaperComponent elevation={3}/>
        </div>
    </BoxxComponent>
);

export const Outlined = () => (
    <BoxxComponent>
        <div className={"separator"}>
            <PaperComponent/>
            <PaperComponent variant={"outlined"} elevation={4}/>
            <PaperComponent variant={"outlined"} elevation={5}/>
            <PaperComponent variant={"outlined"} elevation={6}/>
        </div>
    </BoxxComponent>
);

