import {IOnChange} from "../../Interfaces/IOnChange";
import {IColor} from "../../Interfaces/IColor";

export interface ICheckboxComponentProps {
    id: string;
    name?: string;
    color?: IColor;
    onChange?: (checked: boolean, event: IOnChange) => void;
    checked?: boolean;
    inputProps?: ICheckboxComponentPropsInput;
}

export interface ICheckboxComponentPropsInput {
    name?: string;
    id?: string;
    'aria-label'?: string;
}
