import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";

export interface IFormControlComponentProps {
    className?: string;
    component?: string;
    focus?: boolean;
    children: IChildren | ReactElement[];
}
