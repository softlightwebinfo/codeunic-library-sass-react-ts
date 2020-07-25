import * as React from "react";
import {IAuthForgotLayoutProps} from "./AuthForgotLayout.types";
import "./AuthForgotLayout.scss";
import {BEM} from "../../libs";
import {AuthForgotComponent, ButtonComponent, ContainerComponent, PageComponent} from "../..";

export function AuthForgotLayout(props: IAuthForgotLayoutProps) {
    const bem = new BEM("AuthForgot-layout", {});
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
                    <AuthForgotComponent
                        textButton={props.textButton}
                        textForgot={props.textForgot}
                        onChange={props.onChange}
                        textOtherScreen={props.textOtherScreen}
                        footerAccountText={props.footerAccountText}
                        onSubmit={props.onSubmit}
                        emailValue={props.emailValue}
                        subTitle={props.subTitle}
                        title={props.title}
                        componentLinkOtherScreen={props.componentLinkOtherScreen}
                        routeOtherScreen={props.routeOtherScreen}
                    />
                </ContainerComponent>
            </div>
        </PageComponent>
    );
}
