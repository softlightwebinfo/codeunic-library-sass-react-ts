import {IFormComponent} from "./IFormComponent";
import {FormGroupComponent, IChildren, IStyle} from "../..";
import React from "react";
import {IFormGroupComponentProps} from "../../components/FormGroupComponent/FormGroupComponent.types";
import {FormComponentModel} from "./FormComponentModel";

export interface FormGroupInterface extends IFormGroupComponentProps {

}

export class FormGroup extends FormComponentModel implements IFormComponent, FormGroupInterface {
    private components: IFormComponent[] = [];
    children: IChildren | React.ReactElement[];
    className: string;
    form: boolean;
    row: boolean;
    style: IStyle;

    constructor(props: IFormGroupComponentProps = {} as any) {
        super();
        this.setterProps(props);
    }

    public Add(component: IFormComponent) {
        this.components.push(component);
        return this;
    }

    render(index?: string) {
        return (
            <FormGroupComponent key={index} {...this}>
                {this.components.map((item, index) => (
                    item.render(index.toString())
                ))}
            </FormGroupComponent>
        );

    }
}
