import {IProp} from "../../Interfaces/IProp";
import {IChildren} from "../../Interfaces/IChildren";

export interface ITabComponentProps extends IProp {
    active: number;
    tabs: string[];
    children: IChildren[];
}
