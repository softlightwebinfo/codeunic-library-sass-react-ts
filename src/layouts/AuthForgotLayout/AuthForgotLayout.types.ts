import {IOnChange, IProp, ITitleSubtitle} from "../../Interfaces";
import {ReactElement} from "react";
import {IAuthForgotComponentProps} from "../../components/AuthForgotComponent/AuthForgotComponent.types";

export interface IAuthForgotLayoutProps extends IProp, ITitleSubtitle {
    textButton?: string;
    textForgot?: string;
    routeOtherScreen?: string;
    textOtherScreen: string;
    footerAccountText: string;
    routeForgotPassword?: string;
    componentForgotPassword?: string;

    componentLinkOtherScreen?(props: IAuthForgotComponentProps, children: ReactElement): ReactElement;

    onSubmit(e: any): void;

    onChange(e: IOnChange): any;

    passwordValue: string;
    emailValue: string;
    logo: string;
    logoTitle: string;
    routeLogo: string;
    extras?: IAuthForgotLayoutExtras[];

}

export type IAuthForgotLayoutExtras = {
    label: string;
}
