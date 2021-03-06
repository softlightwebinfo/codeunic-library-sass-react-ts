import {IProp} from "../../Interfaces/IProp";
import {IChildren} from "../../Interfaces/IChildren";

export interface ISidebarComponentProps extends IProp {
    children: IChildren | IChildren[];
}
