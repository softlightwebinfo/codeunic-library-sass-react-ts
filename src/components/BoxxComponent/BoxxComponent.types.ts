import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";
import {IStyle} from "../../Interfaces/IStyle";

export interface IBoxxComponentProps {
    style?: IStyle;
    children: IChildren | ReactElement[];
}
