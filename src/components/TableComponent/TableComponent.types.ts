import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";
import {IProp} from "../../Interfaces/IProp";

export interface ITableComponentProps extends IProp {
    children: IChildren | ReactElement[] | Element[] | any[];
}
