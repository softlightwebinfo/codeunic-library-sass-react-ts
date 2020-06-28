import {IChildren} from "../../Interfaces/IChildren";
import {ITheme} from "../../Interfaces/ITheme";
import {IStyle} from "../../Interfaces/IStyle";

export interface IButtonComponentProps {
    children: IChildren;
    theme?: ITheme;
    variant?: "contained" | "outlined" | "color";
    isDisabled?: boolean;
    grouped?: boolean;
    style?: IStyle;
}
