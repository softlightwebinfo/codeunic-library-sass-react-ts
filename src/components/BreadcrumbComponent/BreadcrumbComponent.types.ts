import {IProp} from "../../Interfaces/IProp";

export interface IBreadcrumbComponentProps extends IProp {
    data: IBreadcrumbComponentPropsData[];
}

export interface IBreadcrumbComponentPropsData {
    label: string;
    route?: string;
}
