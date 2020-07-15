import {IProp} from "../../Interfaces/IProp";
import {IColor} from "../../Interfaces/IColor";

export interface IProgressComponentProps extends IProp {
    value?: number;
    color?: IColor;
    data?: IProgressComponentProps[];
}

export interface IProgressBarComponentProps extends IProgressComponentProps {
    isMultiple?: boolean;
}
