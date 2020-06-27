import {IChildren} from "../../Interfaces/IChildren";
import {ITheme} from "../../Interfaces/ITheme";

export interface IButtonComponentProps {
    children: IChildren;
    theme?: ITheme;
    variant?: "contained" | "outlined";
    isDisabled?: boolean;
}
