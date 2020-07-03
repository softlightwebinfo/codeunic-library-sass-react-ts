import {IChildren} from "../../Interfaces/IChildren";
import {IStyle} from "../../Interfaces/IStyle";

export interface IButtonIconComponentTypes {
    component?: string;
    onClick?: (e) => void;
    children: IChildren | IChildren[];
    style?: IStyle;
}
