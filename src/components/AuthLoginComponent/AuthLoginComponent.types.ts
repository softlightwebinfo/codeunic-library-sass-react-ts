import {IOnChange, IProp, ITitleSubtitle} from "../../Interfaces";
import {ReactElement} from "react";

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

    componentForgotPassword?(props: IAuthLoginComponentProps, children: ReactElement): ReactElement;

    componentLinkOtherScreen?(props: IAuthLoginComponentProps, children: ReactElement): ReactElement;

    onSubmit(e: any): any;
}
