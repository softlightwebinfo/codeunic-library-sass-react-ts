import {IChildren} from "../../Interfaces/IChildren";
import {ITheme} from "../../Interfaces/ITheme";
import {IStyle} from "../../Interfaces/IStyle";

export interface IButtonBaseComponentProps {
    children: IChildren;
    isDisabled?: boolean;
    style?: IStyle;
}
