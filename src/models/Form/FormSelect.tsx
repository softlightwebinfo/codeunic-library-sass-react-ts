import {ISelectComponentProps, ISelectComponentPropsOption} from "../../components/SelectComponent/SelectComponent.types";
import {IFormComponent} from "./IFormComponent";
import {FormComponentModel} from "./FormComponentModel";
import {IStyle} from "../../Interfaces";
import {SelectComponent} from "../../components/SelectComponent/SelectComponent";
import * as React from "react";

export interface IFormSelectInterface extends ISelectComponentProps {

}

export class FormSelect extends FormComponentModel implements IFormSelectInterface, IFormComponent {
    className: string;
    options: ISelectComponentPropsOption[];
    style: IStyle;
    value: string;
    id: string;

    constructor(props: IFormSelectInterface) {
        super();
        this.setterProps(props);
    }

    render(key?: string) {
        return (
            <SelectComponent {...this} key={key}/>
        )
    }


}
