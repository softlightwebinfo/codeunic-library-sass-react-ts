import {IProp} from "../../Interfaces/IProp";
import {ReactElement} from "react";

export interface IGroupTitleComponentProps extends IProp {
    title: string;
    content: ReactElement;
}
