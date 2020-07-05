import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement, MouseEvent} from "react";
import {IStyle} from "../../Interfaces/IStyle";
import {IVariant} from "../../Interfaces/IVariant";

export interface ICardComponentProps {
    onClick: (e: MouseEvent<HTMLElement>) => void;
    rounded?: boolean;
    style?: IStyle;
    variant?: IVariant;
    children: IChildren | ReactElement[];
}
