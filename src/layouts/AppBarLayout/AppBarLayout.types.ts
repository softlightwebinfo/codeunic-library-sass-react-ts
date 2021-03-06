import {IChildren, IProp} from "../../Interfaces";
import {IInputSearchComponentProps} from "../../components/InputSearchComponent/InputSearchComponent.types";
import {INotificationComponentProps} from "../../components/NotificationComponent/NotificationComponent.types";
import {IDropdownDataComponent} from "../../components/DropdownComponent/DropdownComponent.types";
import {TOnline} from "../../models";

export interface IAppBarLayoutProps extends IProp {
    actions?: IChildren[];
    lang: number;
    menuLogin?: IDropdownDataComponent[];
    login?: IAppBarLayoutPropsLogin;
    isLogin?: boolean;
    langData?: IDropdownDataComponent[];
    messages?: INotificationComponentProps[];
    logo: string;
    routeLogo: string;
    title: string;
    search?: IInputSearchComponentProps;
    notifications?: INotificationComponentProps[];
}

export type IAppBarLayoutPropsLogin = {
    onChange?(e: IDropdownDataComponent): void;
    status: TOnline;
    avatar: string;
    name: string;
};
