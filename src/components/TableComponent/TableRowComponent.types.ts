import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";
import {IProp} from "../../Interfaces/IProp";

export interface ITableRowComponentProps extends IProp {
    children: IChildren | ReactElement[];
    header?: boolean;
    footer?: boolean;
}
