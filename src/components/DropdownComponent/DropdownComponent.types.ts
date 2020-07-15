import {IProp} from "../../Interfaces/IProp";
import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";

export interface IDropdownComponentProps extends IProp {
    value?: any;
    data: IDropdownDataComponent[];
    trigger?: ReactElement;

    onChange?(e: IDropdownDataComponent): void;
}

export interface IDropdownDataComponent {
    label: string;
    icon: IChildren | IChildren[];
    value?: any;
}
