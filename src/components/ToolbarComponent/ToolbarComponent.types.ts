import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";

export interface IToolbarComponentProps {
    regular?: boolean;
    gutters?: boolean;
    children: IChildren | ReactElement[];
}
