import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";
import {IProp} from "../../Interfaces/IProp";
import {IAlign} from "../../Interfaces/IAlign";

export interface ITableColComponentProps extends IProp {
    header?: boolean;
    children: IChildren | ReactElement[];
    align?: IAlign;
}
