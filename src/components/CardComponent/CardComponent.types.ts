import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";
import {IStyle} from "../../Interfaces/IStyle";
import {IVariant} from "../../Interfaces/IVariant";
import {IOnClick} from "../../Interfaces/IOnClick";

export interface ICardComponentProps {
    className?: string;
    onClick?: (e: IOnClick) => void;
    rounded?: boolean;
    style?: IStyle;
    variant?: IVariant;
    children: IChildren | ReactElement[];
}
