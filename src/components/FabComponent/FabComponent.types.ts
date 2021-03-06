import {ITheme} from "../../Interfaces/ITheme";
import {IChildren} from "../../Interfaces/IChildren";

export interface IFabComponentProps {
    theme?: ITheme;
    children?: IChildren;
    icon?: string;
}
