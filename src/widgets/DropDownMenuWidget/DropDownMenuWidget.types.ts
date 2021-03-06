import {IProp} from "../../Interfaces/IProp";
import {IChildren} from "../../Interfaces/IChildren";

export interface IDropDownMenuWidgetProps extends IProp {
    children: IChildren | IChildren[] | any[];
    textFooter: string;
    title: string;
    open?: boolean;
}
