import {IOnChange, IProp, ITitleSubtitle} from "../../Interfaces";
import {ReactElement} from "react";

export interface IAuthForgotComponentProps extends IProp, ITitleSubtitle {
    textButton?: string;
    textForgot?: string;

    onChange(e: IOnChange): any;

    textOtherScreen: string;
    routeOtherScreen?: string;
    footerAccountText: string;
    emailValue: string;

    componentLinkOtherScreen?(props: IAuthForgotComponentProps, children: ReactElement): ReactElement;

    onSubmit(e: any): any;
}
