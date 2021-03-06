import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";
import {IStyle} from "../../Interfaces/IStyle";

export interface ICardActionsComponentProps {
    onClick?: (e: any) => void;
    style?: IStyle;
    separate?: boolean;
    children: IChildren | ReactElement[];
}
