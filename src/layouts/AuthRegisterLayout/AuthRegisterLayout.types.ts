import {IOnChange, IProp, ITitleSubtitle} from "../../Interfaces";
import {ReactElement} from "react";
import {IAuthRegisterComponentProps} from "../../components/AuthRegisterComponent/AuthRegisterComponent.types";

export interface IAuthRegisterLayoutProps extends IProp, ITitleSubtitle {
    repeatPasswordValue: string;
    nameValue: string;
    textButton?: string;
    textForgot?: string;
    routeOtherScreen?: string;

    componentLinkOtherScreen?(props: IAuthRegisterComponentProps, children: ReactElement): ReactElement;

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
    extras?: IAuthRegisterLayoutPropsExtras[];

    onChange(e: IOnChange): any;
}

export type IAuthRegisterLayoutPropsExtras = {
    label: string;
}
