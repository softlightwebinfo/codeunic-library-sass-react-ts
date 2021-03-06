import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";
import {IProp} from "../../Interfaces/IProp";

export interface IToolbarComponentProps extends IProp {
    regular?: boolean;
    gutters?: boolean;
    children: IChildren | ReactElement[];
}
