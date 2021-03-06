import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";
import {IProp} from "../../Interfaces/IProp";

export interface ITableRowComponentProps extends IProp {
    children: IChildren | ReactElement[] | any[];
    header?: boolean;
    footer?: boolean;
}
