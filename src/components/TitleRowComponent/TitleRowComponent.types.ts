import {IProp} from "../../Interfaces/IProp";
import {IBreadcrumbComponentPropsData} from "../BreadcrumbComponent/BreadcrumbComponent.types";
import {IOnClick} from "../../Interfaces/IOnClick";
import {ReactElement} from "react";

export interface ITitleRowComponentProps extends IProp {
    button?: ITitleRowComponentPropsButton;
    breadcrumb: IBreadcrumbComponentPropsData[];
    title: string;
    extra?: ReactElement;
}

export type ITitleRowComponentPropsButton = {
    label: string;
    icon: string;
    onClick(e: IOnClick): any;
};
