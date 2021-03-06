import {IProp} from "../../Interfaces/IProp";

export interface ICallSidebarLayoutProps extends IProp {
    data: ICallSidebarLayoutPropsChat[];
}

export interface ICallSidebarLayoutPropsChat {
    src?: string;
    line?: boolean;
    date: string;
    name?: string;
    icon?: string;
    message?: string;
}
