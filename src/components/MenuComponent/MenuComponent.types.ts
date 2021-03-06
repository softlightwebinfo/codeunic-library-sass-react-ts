import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";
import {IStyle} from "../../Interfaces/IStyle";

export interface IMenuComponentProps {
    trigger?: ReactElement;
    static?: boolean;
    children: IChildren | ReactElement[];
    id: string;
    keepMounted?: boolean;
    open: boolean;
    onClose: () => void;
    style?: IStyle;
    PaperProps?: IPaperProps;
}

export interface IPaperProps {
    style?: IStyle;
}
