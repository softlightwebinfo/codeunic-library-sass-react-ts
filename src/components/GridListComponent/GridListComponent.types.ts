import {ISpacing} from "../../Interfaces/ISpacing";
import {IStyle} from "../../Interfaces/IStyle";
import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";

export interface IGridListComponentProps {
    children: IChildren | ReactElement[];
    cellHeight?: number | 'auto';
    cols?: number;
    component?: string;
    spacing?: ISpacing;
    style?: IStyle;
}
