import {IProp} from "../../Interfaces/IProp";
import {ISidebarMenuLayoutPropsMenu} from "../../layouts/SidebarMenuLayout/SidebarMenuLayout.types";
import {IAppBarLayoutProps} from "../../layouts/AppBarLayout/AppBarLayout.types";
import {IBreadcrumbComponentPropsData} from "../../components/BreadcrumbComponent/BreadcrumbComponent.types";
import {ReactElement} from "react";

export interface IDashboardAppProps extends IProp {
    menu: ISidebarMenuLayoutPropsMenu[];
    header: IAppBarLayoutProps;
    title?: IDashboardAppPropsTitle;
}

export interface IDashboardAppState {
    menu?: ISidebarMenuLayoutPropsMenu[];
    miniSidebar?: boolean;
    searchValue?: string;

    setToggleSidebar?(): void;

    setToggleItemMenu?(): void;
}

export type IDashboardAppPropsTitle = {
    breadcrumb: IBreadcrumbComponentPropsData[];
    title: string;
    extra?: ReactElement;
};
