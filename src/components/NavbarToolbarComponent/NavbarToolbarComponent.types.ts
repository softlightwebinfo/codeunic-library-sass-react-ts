import {IProp} from "../../Interfaces/IProp";
import {ReactElement} from "react";

export interface INavbarToolbarComponentProps extends IProp{
    left: ReactElement;
    center?: ReactElement;
    right: ReactElement;
}
