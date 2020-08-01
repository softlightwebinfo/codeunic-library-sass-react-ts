import {IFormComponent} from "./IFormComponent";
import {FormComponentModel} from "./FormComponentModel";
import * as React from "react";
import {
    ICheckboxComponentProps,
    ICheckboxComponentPropsInput
} from "../../components/CheckboxComponent/CheckboxComponent.types";
import {CheckboxComponent, FormControlLabelComponent, IColor, RadioComponent} from "../..";

export interface FormCheckboxInterface extends ICheckboxComponentProps {
    id: string;
}

export class FormCheckbox extends FormComponentModel implements FormCheckboxInterface, IFormComponent {
    checked: boolean;
    color: IColor;
    inputProps: ICheckboxComponentPropsInput;
    name: string;
    id: string;
    label: string;

    constructor(props: FormCheckboxInterface, label?: string) {
        super();
        this.setterProps(props);
        this.label = label;
    }

    render(key?: string) {
        const component = (
            <CheckboxComponent {...this} key={key}/>
        )
        if (this.label) {
            return (
                <FormControlLabelComponent control={component} label={"Primary"}/>
            );
        }
        return component;
    }

}
