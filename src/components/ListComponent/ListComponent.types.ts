import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";
import {IStyle} from "../../Interfaces/IStyle";

export interface IListComponentProps {
    id?: string;
    horizontal?: boolean;
    className?: string;
    padding?: boolean;
    ariaLabel?: string;
    component?: string;
    children: IChildren | ReactElement[] | any[];
    style?: IStyle;
}
