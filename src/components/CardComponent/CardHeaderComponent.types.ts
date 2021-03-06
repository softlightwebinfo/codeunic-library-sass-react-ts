import {IStyle} from "../../Interfaces/IStyle";
import {ReactElement} from "react";

export interface ICardHeaderComponentProps {
    style?: IStyle;
    avatar?: ReactElement;
    action?: ReactElement;
    title: string;
    subheader: string;
}
