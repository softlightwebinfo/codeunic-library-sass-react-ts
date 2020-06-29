import React from "react";
import {TextFieldComponent} from './TextFieldComponent';
import {BoxxComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|TextField"
};

export const Default = () => (
   <BoxxComponent>
       <TextFieldComponent
           id={"test"}
           label={"Standard"}
           onChange={(e)=>console.log(e.target)}
       />
   </BoxxComponent>
);
