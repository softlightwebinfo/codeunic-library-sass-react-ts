import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";

export interface IButtonGroupComponentProps {
    onClick?(e: any, index: number): any;

    children: IChildren | ReactElement[];
}
