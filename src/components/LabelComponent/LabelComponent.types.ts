import {IProp} from "../../Interfaces/IProp";
import {ITheme} from "../../Interfaces/ITheme";

export interface ILabelComponentProps extends IProp {
    theme: ITheme;
    name: string;
}
