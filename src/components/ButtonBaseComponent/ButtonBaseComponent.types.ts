import {IChildren} from "../../Interfaces/IChildren";
import {IStyle} from "../../Interfaces/IStyle";

export interface IButtonBaseComponentProps {
    className?: string;
    children: IChildren;
    isDisabled?: boolean;
    style?: IStyle;
}
