import {IProp} from "../../Interfaces/IProp";
import {IChildren} from "../../Interfaces/IChildren";

export interface IContentToolbarComponentProps extends IProp {
    children: IChildren | IChildren[];
}
