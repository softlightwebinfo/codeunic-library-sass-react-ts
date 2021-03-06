import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";
import {IAlign} from "../../Interfaces/IAlign";
import {IColor} from "../../Interfaces/IColor";
import {IDisplay} from "../../Interfaces/IDisplay";
import {ITypographyVariant} from "../../Interfaces/ITypographyVariant";
import {IObjectString} from "../../Interfaces/IObject";
import {IStyle} from "../../Interfaces/IStyle";

export interface ITypographyComponentProps {
    onClick?: (e: any) => void;
    style?: IStyle;
    children: IChildren | ReactElement[] | string[];
    align?: IAlign;
    color?: IColor;
    display?: IDisplay;
    gutterBottom?: boolean;
    noWrap?: boolean;
    paragraph?: boolean;
    variant?: ITypographyVariant;
    variantMapping?: IObjectString;
    component?: string;
    className?: string;
}
