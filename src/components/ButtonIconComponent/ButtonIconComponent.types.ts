import {IChildren} from "../../Interfaces/IChildren";
import {IProp} from "../../Interfaces/IProp";

export interface IButtonIconComponentTypes extends IProp {
    action?: boolean;
    component?: string;
    onClick?: (e) => void;
    children: IChildren | IChildren[];
    hover?: boolean;
}
