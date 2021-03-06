import {IProp} from "../../Interfaces/IProp";
import {IChildren} from "../../Interfaces/IChildren";

export interface ICardLayoutProps extends IProp {
    title: string;
    children: IChildren | IChildren[] | any;
}
