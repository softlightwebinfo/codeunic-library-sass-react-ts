import {IOnChange, IProp, ITitleSubtitle} from "../../Interfaces";

export interface IAuthLoginLayoutProps extends IProp, ITitleSubtitle {
    textButton?: string;
    textForgot?: string;
    routeOtherScreen?: string;
    componentLinkOtherScreen?: string;
    textOtherScreen: string;
    footerAccountText: string;
    routeForgotPassword?: string;
    componentForgotPassword?: string;

    onSubmit(e: any): void;

    passwordValue: string;
    emailValue: string;
    logo: string;
    logoTitle: string;
    routeLogo: string;
    extras?: IAuthLoginLayoutPropsExtras[];

    onChange(e: IOnChange): any;
}

export type IAuthLoginLayoutPropsExtras = {
    label: string;
}
