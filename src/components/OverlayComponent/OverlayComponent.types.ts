import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";

export interface IOverlayComponentProps {
    open: boolean;
    children: IChildren | ReactElement[];
    portal?: boolean;
}
