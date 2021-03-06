import {IChildren} from "../../Interfaces";
import {ITheme} from "../../Interfaces";
import {IStyle} from "../../Interfaces";
import {MouseEvent} from 'react';

export interface IButtonComponentProps {
    type?: "submit" | "button";
    big?: boolean;
    component?: string;
    rounded?: boolean;
    className?: string;
    block?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    children: IChildren | IChildren[];
    theme?: ITheme;
    variant?: "contained" | "outlined" | "color";
    isDisabled?: boolean;
    grouped?: boolean;
    style?: IStyle;
}
