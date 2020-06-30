import {IPosition} from "../../Interfaces/IPosition";
import {IColor} from "../../Interfaces/IColor";
import {IChildren} from "../../Interfaces/IChildren";
import {IStyle} from "../../Interfaces/IStyle";

export interface IAppBarComponentProps {
    style?: IStyle;
    children: IChildren;
    color?: IColor;
    position?: IPosition;
}
