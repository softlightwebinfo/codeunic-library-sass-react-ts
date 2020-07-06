import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";

export interface IListComponentProps {
    className?: string;
    padding?: boolean;
    ariaLabel?: string;
    component?: string;
    children: IChildren | ReactElement[];
}
