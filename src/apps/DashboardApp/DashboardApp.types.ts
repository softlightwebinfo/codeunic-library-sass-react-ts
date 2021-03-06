import {IProp} from "../../Interfaces";
import {ISidebarMenuLayoutPropsMenu} from "../../layouts/SidebarMenuLayout/SidebarMenuLayout.types";
import {IAppBarLayoutProps} from "../../layouts/AppBarLayout/AppBarLayout.types";
import {IBreadcrumbComponentPropsData} from "../../components/BreadcrumbComponent/BreadcrumbComponent.types";
import {ReactElement} from "react";

export interface IDashboardAppProps extends IProp {
    menu: ISidebarMenuLayoutPropsMenu[];
    header: IAppBarLayoutProps;
    title?: IDashboardAppPropsTitle;

    onClickItemSidebar?(value: ISidebarMenuLayoutPropsMenu): void;
}

export interface IDashboardAppState {
    menu?: ISidebarMenuLayoutPropsMenu[];
    miniSidebar?: boolean;
    searchValue?: string;

    setToggleSidebar?(): void;

    setToggleItemMenu?(): void;

    onClickItemSidebar?(value: ISidebarMenuLayoutPropsMenu): void;
}

export type IDashboardAppPropsTitle = {
    breadcrumb: IBreadcrumbComponentPropsData[];
    title: string;
    extra?: ReactElement;
};
