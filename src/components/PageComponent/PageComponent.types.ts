import {IPosition} from "../../Interfaces/IPosition";
import {IColor} from "../../Interfaces/IColor";
import {IChildren} from "../../Interfaces/IChildren";
import {IStyle} from "../../Interfaces/IStyle";
import {IProp} from "../../Interfaces/IProp";

export interface IAppBarComponentProps extends IProp {
    children: IChildren;
    color?: IColor;
    position?: IPosition;
}
