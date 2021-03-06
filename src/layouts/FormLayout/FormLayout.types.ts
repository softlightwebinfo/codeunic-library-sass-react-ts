import {IProp} from "../../Interfaces";
import {Form} from "../../models/Form";

export interface IFormLayoutProps extends IProp {
    form: Form;

    onChange?(id: string, value: any, values: { [p: string]: any }): any;

    onSubmit?(values: { [p: string]: any }): any;
}

export interface IFormLayoutState {
    values?: { [p: string]: any },

    addValue?(id: string, value: any, then: any): any;
}
