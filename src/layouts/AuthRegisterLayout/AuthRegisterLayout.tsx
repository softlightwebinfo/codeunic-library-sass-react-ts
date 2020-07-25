import * as React from "react";
import {IAuthRegisterLayoutProps} from "./AuthRegisterLayout.types";
import "./AuthRegisterLayout.scss";
import {BEM} from "../../libs";
import {AuthRegisterComponent, ButtonComponent, ContainerComponent, PageComponent} from "../..";

export function AuthRegisterLayout(props: IAuthRegisterLayoutProps) {
    const bem = new BEM("AuthRegister-layout", {});
    bem.Append(props.className);
    const {extras = []} = props;
    return (
        <PageComponent style={props.style} className={bem.toString()}>
            <div className={bem.Children("content")}>
                <div className={bem.Children("extras")}>
                    {extras.map((item, index) => (
                        <ButtonComponent key={index} theme={"mixPurple"} component={"a"}>{item.label}</ButtonComponent>
                    ))}
                </div>
                <ContainerComponent>
                    <div className={bem.Children("logo")}>
                        <a href={props.routeLogo}>
                            <img src={props.logo} alt={"logo"} title={props.logoTitle}/>
                        </a>
                    </div>
                    <AuthRegisterComponent
                        textButton={props.textButton}
                        textForgot={props.textForgot}
                        onChange={props.onChange}
                        textOtherScreen={props.textOtherScreen}
                        footerAccountText={props.footerAccountText}
                        onSubmit={props.onSubmit}
                        passwordValue={props.passwordValue}
                        emailValue={props.emailValue}
                        subTitle={props.subTitle}
                        title={props.title}
                        componentForgotPassword={props.componentForgotPassword}
                        componentLinkOtherScreen={props.componentLinkOtherScreen}
                        routeOtherScreen={props.routeOtherScreen}
                        routeForgotPassword={props.routeForgotPassword}
                        nameValue={props.nameValue}
                        repeatPasswordValue={props.repeatPasswordValue}
                    />
                </ContainerComponent>
            </div>
        </PageComponent>
    );
}
