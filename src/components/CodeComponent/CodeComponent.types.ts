import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";

export interface ICodeComponentProps {
    children: IChildren | ReactElement[];
}
