import {IChildren} from "../../Interfaces/IChildren";
import {IStyle} from "../../Interfaces/IStyle";

export interface IButtonIconComponentTypes {
    onClick?: (e) => void;
    children: IChildren;
    style?: IStyle;
}
