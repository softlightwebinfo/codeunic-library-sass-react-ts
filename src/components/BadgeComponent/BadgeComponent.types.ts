import {IChildren} from "../../Interfaces/IChildren";
import {ITheme} from "../../Interfaces/ITheme";
import {IStyle} from "../../Interfaces/IStyle";

export interface IBadgeComponentProps {
    style?: IStyle;
    theme?: ITheme;
    right?: boolean;
    badgeContent: number;
    children?: IChildren;
}
