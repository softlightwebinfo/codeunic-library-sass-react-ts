import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";
import {IStyle} from "../../Interfaces/IStyle";

export interface IGridListTileComponentProps {
    style?: IStyle;
    children: IChildren | ReactElement[];
    cols?: number;
    rows?: number;
    component?: string;
}
