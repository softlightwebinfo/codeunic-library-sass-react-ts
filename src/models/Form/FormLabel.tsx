import {FormLabelInterface} from "./FormLabelInterface";
import {FormComponentModel} from "./FormComponentModel";
import {IFormComponent} from "./IFormComponent";
import {IChildren} from "../../Interfaces";
import {InputLabelComponent} from "../..";
import * as React from "react";

export class FormLabel extends FormComponentModel implements FormLabelInterface, IFormComponent {
    children: IChildren;
    className: string;
    htmlFor: string;
    isUp: boolean;

    constructor(props: FormLabelInterface = {} as any) {
        super();
        this.setterProps(props);
    }

    render(index?: string) {
        return (
            <InputLabelComponent key={index} {...this}>{this.children}</InputLabelComponent>
        )
    }
}
