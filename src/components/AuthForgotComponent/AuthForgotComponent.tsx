import * as React from "react";
import {IAuthForgotComponentProps} from "./AuthForgotComponent.types";
import "./AuthForgotComponent.scss";
import {BEM} from "../../libs";
import {AuthFormComponent, ButtonComponent, FormGroupComponent, InputLabelComponent, TextFieldComponent, TypographyComponent} from "../..";
import {Fragment} from "react";

export function AuthForgotComponent(props: IAuthForgotComponentProps) {
    const bem = new BEM("AuthForgot-component", {});
    bem.Append(props.className);
    const ComponentLinkOtherScreen = ({children}) => {
        return props.componentLinkOtherScreen && props.componentLinkOtherScreen(props, children) || <Fragment>{children}</Fragment>;
    };
    return (
        <AuthFormComponent component={"form"} onSubmit={props.onSubmit}>
            <TypographyComponent className={bem.Children("title")} component={"h3"} variant={"h4"}>{props.title}</TypographyComponent>
            <TypographyComponent className={bem.Children("subTitle")} component={"p"}>{props.subTitle}</TypographyComponent>
            <FormGroupComponent form>
                <InputLabelComponent>Email address</InputLabelComponent>
                <TextFieldComponent onChange={props.onChange} name={"email"} outline id={"email"} placeholder={"Email"} value={props.emailValue}/>
            </FormGroupComponent>
            <FormGroupComponent form>
                <ButtonComponent type={"submit"} big theme={"mixPurple"}>{props.textButton || "Reset Password"}</ButtonComponent>
            </FormGroupComponent>
            <div className={bem.Children("footer")}>
                <p>
                    {props.footerAccountText}
                    <ComponentLinkOtherScreen>
                        <span className={bem.Children("other-screen")}>{props.textOtherScreen}</span>
                    </ComponentLinkOtherScreen>
                </p>
            </div>
        </AuthFormComponent>
    )
}
