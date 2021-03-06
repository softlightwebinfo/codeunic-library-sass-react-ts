import {IStyle} from "../../Interfaces/IStyle";
import {IChildren} from "../../Interfaces/IChildren";

export interface IDashCardComponentProps {
    className?: string;
    children: IChildren | IChildren[];
    style?: IStyle;
}
