import {IProp} from "../../Interfaces/IProp";
import {ISidebarMenu} from "../../models";
import {IStyle} from "../../Interfaces/IStyle";
import {ReactElement} from "react";
import {IOnClick} from "../../Interfaces/IOnClick";

export interface ISidebarMenuComponentProps extends IProp {
    menu: ISidebarMenu[];
    onClick: (data: any, index: number) => any;
}

export type ISidebarMenuItemComponentProps = {
    onClick?(e: IOnClick): any;
    arrow?: boolean;
    active?: boolean;
    onClickPlus?: () => void;
    number?: number;
    name: string;
    icon?: ReactElement;
    style?: IStyle;
    className?: string;
    plus?: boolean;
    header?: boolean;
};
