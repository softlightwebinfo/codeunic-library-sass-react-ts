import {IChildren} from "../../Interfaces/IChildren";
import {ITheme} from "../../Interfaces/ITheme";

export interface IBadgeComponentProps {
    theme?: ITheme;
    right?: boolean;
    badgeContent: number;
    children?: IChildren;
}
