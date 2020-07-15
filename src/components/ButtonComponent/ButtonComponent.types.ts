import {IChildren} from "../../Interfaces/IChildren";
import {ITheme} from "../../Interfaces/ITheme";
import {IStyle} from "../../Interfaces/IStyle";
import {MouseEvent} from 'react';

export interface IButtonComponentProps {
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    children: IChildren;
    theme?: ITheme;
    variant?: "contained" | "outlined" | "color";
    isDisabled?: boolean;
    grouped?: boolean;
    style?: IStyle;
}
