import {IChildren} from "../../Interfaces/IChildren";
import {ITheme} from "../../Interfaces/ITheme";
import {IProp} from "../../Interfaces/IProp";

export interface IBadgeComponentProps extends IProp{
    theme?: ITheme;
    right?: boolean;
    badgeContent: number;
    children?: IChildren;
}
