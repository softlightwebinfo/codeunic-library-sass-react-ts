import {IProp} from "../../Interfaces/IProp";
import {ReactElement} from "react";

export interface ISidebarMenuLayoutProps extends IProp {
    menu?: ISidebarMenuLayoutPropsMenu[];
}

export type ISidebarMenuLayoutPropsMenu = {
    active?: boolean;
    menu: ISidebarMenuLayoutPropsMenu[];
    name: string;
    icon?: ReactElement;
    header?: boolean;
    id?: string;
}
