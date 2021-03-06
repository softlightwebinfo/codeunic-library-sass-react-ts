import {IStyle} from "../../Interfaces/IStyle";
import {IInput} from "../../Interfaces/IInput";
import {ChangeEvent} from "react";

export interface IInputFieldComponentProps {
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    value?: string;
    placeholder?: string;
    type?: IInput;
    style?: IStyle;
    autoComplete?: boolean;
    'aria-describedby'?: string;
    autoFocus?: boolean;
    fullWidth?: boolean;
    multiline?: boolean;
    name?: string;
    rows?: number;
    rowsMax?: number;
    id?: string;
}
