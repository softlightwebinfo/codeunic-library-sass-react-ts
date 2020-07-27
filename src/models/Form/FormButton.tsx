import {IButtonComponentProps} from "../../components/ButtonComponent/ButtonComponent.types";
import {FormComponentModel} from "./FormComponentModel";
import {IFormComponent} from "./IFormComponent";
import {IChildren, IStyle, ITheme} from "../../Interfaces";
import * as React from "react";
import {ButtonComponent} from "../..";

export interface FormButtonInterface extends IButtonComponentProps {

}

export class FormButton extends FormComponentModel implements FormButtonInterface, IFormComponent {
    big: boolean;
    block: boolean;
    children: IChildren | IChildren[];
    className: string;
    component: string;
    grouped: boolean;
    isDisabled: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    rounded: boolean;
    style: IStyle;
    theme: ITheme;
    type: "submit" | "button";
    variant: "contained" | "outlined" | "color";

    constructor(props: FormButtonInterface) {
        super();
        this.setterProps(props);
    }

    render(index?: string) {
        return (
            <ButtonComponent key={index} {...this}>{this.children}</ButtonComponent>
        )
    }
}
