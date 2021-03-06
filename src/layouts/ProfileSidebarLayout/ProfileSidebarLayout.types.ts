import {IProp} from "../../Interfaces/IProp";
import {ITitleSubtitle} from "../../Interfaces/ITitleSubtitle";

export interface IProfileSidebarLayoutProps extends IProp, ITitleSubtitle {
    data: IProfileSidebarLayoutPropsData[];
    avatar: string;
}

export interface IProfileSidebarLayoutPropsData {
    title: string;
    value: string;
}
