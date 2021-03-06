import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement, MouseEvent} from "react";

export interface IListItemComponentProps {
    className?: string;
    component?: string;
    gutters?: boolean;
    children: IChildren | ReactElement[];
    button?: boolean;
    ariaHasPopup?: "true" | "false";
    ariaControl?: string;
    ariaLabel?: string;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}
