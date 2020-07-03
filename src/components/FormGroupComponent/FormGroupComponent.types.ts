import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";

export interface IFormGroupComponentProps {
    row?: boolean;
    children: IChildren | ReactElement[];
}
