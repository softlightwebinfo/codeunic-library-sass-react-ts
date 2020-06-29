import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";

export interface IFormControlComponentProps {
    className?: string;
    focus?: boolean;
    children: IChildren | ReactElement[];
}
