import {IProp} from "../../Interfaces/IProp";
import {ReactElement} from "react";

export interface IGroupWindowLayoutProps extends IProp {
    header?: ReactElement;
    content: ReactElement;
    footer?: ReactElement;
}
