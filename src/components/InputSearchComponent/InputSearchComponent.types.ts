import {IInputFieldComponentProps} from "../InputFieldComponent/InputFieldComponent.types";

export interface IInputSearchComponentProps extends IInputFieldComponentProps {
    custom?: boolean;
    className?: string;
    outlined?: boolean;
}
