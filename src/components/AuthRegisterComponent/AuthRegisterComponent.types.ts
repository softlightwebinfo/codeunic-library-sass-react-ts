import {IOnChange, IProp, ITitleSubtitle} from "../../Interfaces";
import {ReactElement} from "react";

export interface IAuthRegisterComponentProps extends IProp, ITitleSubtitle {
    repeatPasswordValue: string;
    nameValue: string;
    textButton?: string;
    textForgot?: string;

    onChange(e: IOnChange): any;

    textOtherScreen: string;
    routeOtherScreen?: string;
    footerAccountText: string;
    routeForgotPassword?: string;
    emailValue: string;
    passwordValue: string;

    componentLinkOtherScreen?(props: IAuthRegisterComponentProps, children: ReactElement): ReactElement;

    componentForgotPassword?: string;

    onSubmit(e: any): any;
}
