import {IChildren} from "../../Interfaces/IChildren";
import {IItem, ISpacing} from "../../Interfaces/ISpacing";
import {IAlignContent, IAlignItems} from "../../Interfaces/IAlign";
import {IDirection, IJustify} from "../../Interfaces/IDirection";
import {IWrap} from "../../Interfaces/IWrap";
import {IGridColumns} from "../../Interfaces/IGridColumns";
import {ReactElement} from "react";

export interface IGridComponentProps extends IGridColumns {
    children?: IChildren | ReactElement[];
    container?: boolean;
    item?: boolean;
    spacing?: ISpacing;
    alignContent?: IAlignContent;
    alignItems?: IAlignItems;
    direction?: IDirection;
    justify?: IJustify;
    wrap?: IWrap;
    zeroMinWidth?: boolean;
    className?: string;
}
