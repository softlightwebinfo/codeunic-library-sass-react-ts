import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";
import {IStyle} from "../../Interfaces/IStyle";
import {IVariant} from "../../Interfaces/IVariant";

export interface ICardComponentProps {
    rounded?: boolean;
    style?: IStyle;
    variant?: IVariant;
    children: IChildren | ReactElement[];
}
