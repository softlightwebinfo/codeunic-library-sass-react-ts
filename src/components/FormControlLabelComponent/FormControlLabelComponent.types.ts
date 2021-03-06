import {ReactElement} from "react";
import {IColor} from "../../Interfaces/IColor";

export interface IFormControlLabelComponentProps {
    control: ReactElement;
    label: string;
    color?: IColor;
    value?: string;
}
