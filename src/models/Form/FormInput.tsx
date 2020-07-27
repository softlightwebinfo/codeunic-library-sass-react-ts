import {IFormComponent} from "./IFormComponent";
import {ITextFieldComponentProps} from "../../components/TextFieldComponent/TextFieldComponent.types";
import {IInput, IStyle} from "../../Interfaces";
import * as React from "react";
import {FormComponentModel} from "./FormComponentModel";
import {TextFieldComponent} from "../..";

export interface FormInputInterface extends ITextFieldComponentProps {

}

export class FormInput extends FormComponentModel implements IFormComponent, FormInputInterface {
    "aria-describedby": string;
    autoComplete: boolean;
    autoFocus: boolean;
    className: string;
    fullWidth: boolean;
    helperTextId: string;
    id: string;
    label: string;
    multiline: boolean;
    name: string;
    onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: (e: React.ChangeEvent<HTMLInputElement>) => void;
    outline: boolean;
    placeholder: string;
    required: boolean;
    rows: number;
    rowsMax: number;
    style: IStyle;
    type: IInput;
    value: string = "";

    constructor(props: ITextFieldComponentProps) {
        super();
        this.setterProps(props);
    }

    render(index?: string) {
        return (
            <TextFieldComponent key={index} {...this} />
        )
    }
}
