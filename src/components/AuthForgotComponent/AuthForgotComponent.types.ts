import {IOnChange, IProp, ITitleSubtitle} from "../../Interfaces";

export interface IAuthLoginComponentProps extends IProp, ITitleSubtitle {
    textButton?: string;
    textForgot?: string;

    onChange(e: IOnChange): any;

    textOtherScreen: string;
    routeOtherScreen?: string;
    footerAccountText: string;
    routeForgotPassword?: string;
    emailValue: string;
    passwordValue: string;
    componentLinkOtherScreen?: string;
    componentForgotPassword?: string;

    onSubmit(e: any): any;
}
