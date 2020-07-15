import {IChildren} from "../../Interfaces/IChildren";
import {IStyle} from "../../Interfaces/IStyle";

export interface IAvatarComponentProps {
    style?: IStyle;
    children: IChildren;
    className?: string;
}
