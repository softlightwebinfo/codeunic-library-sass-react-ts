import {IStyle} from "../../Interfaces/IStyle";
import {IChildren} from "../../Interfaces/IChildren";

export interface ICardActionsComponentProps {
    onClick?: (e: any) => void;
    style?: IStyle;
    children: IChildren | IChildren[];
}
