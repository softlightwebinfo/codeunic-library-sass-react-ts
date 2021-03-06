import {IInputFieldComponentProps} from "../InputFieldComponent/InputFieldComponent.types";

export interface ITextFieldComponentProps extends IInputFieldComponentProps{
    outline?: boolean;
    helperTextId?: string;
    id: string;
    label?: string;
}
