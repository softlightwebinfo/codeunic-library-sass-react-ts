import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";
import {IStyle} from "../../Interfaces/IStyle";

export interface ICardActionsComponentProps {
    style?: IStyle;
    children: IChildren | ReactElement[];
}
