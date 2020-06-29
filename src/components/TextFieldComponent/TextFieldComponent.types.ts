import {IInputFieldComponentProps} from "../InputFieldComponent/InputFieldComponent.types";

export interface ITextFieldComponentProps extends IInputFieldComponentProps{
    helperTextId?: string;
    id: string;
    label?: string;
}
