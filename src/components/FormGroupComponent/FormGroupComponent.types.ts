import {IChildren, IProp} from "../../Interfaces";
import {ReactElement} from "react";

export interface IFormGroupComponentProps extends IProp {
    form?: boolean;
    row?: boolean;
    children?: IChildren | ReactElement[];
}
