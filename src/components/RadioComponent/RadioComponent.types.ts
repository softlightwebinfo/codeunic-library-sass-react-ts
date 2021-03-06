import {IColor} from "../../Interfaces/IColor";
import {IOnChange} from "../../Interfaces/IOnChange";

export interface IRadioComponentProps {
    name?: string;
    color?: IColor;
    onChange?: (checked: boolean, event: IOnChange) => void;
    checked?: boolean;
    inputProps?: IRadioComponentPropsInput;
    value?: string;
}

export interface IRadioComponentPropsInput {
    name?: string;
    id?: string;
    'aria-label'?: string;
}
