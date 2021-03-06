import {IOnChange, IProp, ITitleSubtitle} from "../../Interfaces";
import {ReactElement} from "react";
import {IAuthLoginComponentProps} from "../../components/AuthLoginComponent/AuthLoginComponent.types";

export interface IAuthLoginLayoutProps extends IProp, ITitleSubtitle {
    textButton?: string;
    textForgot?: string;
    routeOtherScreen?: string;
    textOtherScreen: string;
    footerAccountText: string;
    routeForgotPassword?: string;

    componentForgotPassword?(props: IAuthLoginComponentProps, children: ReactElement): ReactElement;

    componentLinkOtherScreen?(props: IAuthLoginComponentProps, children: ReactElement): ReactElement;

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
