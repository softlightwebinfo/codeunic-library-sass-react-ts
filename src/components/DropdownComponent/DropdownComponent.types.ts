import {IProp} from "../../Interfaces";
import {IChildren} from "../../Interfaces";
import {ReactElement} from "react";

export interface IDropdownComponentProps extends IProp {
    open?: boolean;
    value?: any;
    data: IDropdownDataComponent[];
    trigger?: ReactElement;

    menu?(props: IDropdownComponentProps): ReactElement;

    onChange?(e: IDropdownDataComponent): void;
}

export interface IDropdownDataComponent {
    label: string;
    icon: IChildren | IChildren[];
    value?: any;
}
