import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";

export interface IListComponentProps {
    padding?: boolean;
    ariaLabel?: string;
    component?: string;
    children: IChildren | ReactElement[];
}
