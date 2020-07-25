import * as React from "react";
import {IAuthLoginComponentProps} from "./AuthLoginComponent.types";
import "./AuthLoginComponent.scss";
import {BEM} from "../../libs";
import {AuthFormComponent, ButtonComponent, FormGroupComponent, InputLabelComponent, TextFieldComponent, TypographyComponent} from "../..";
import {Fragment} from "react";

export function AuthLoginComponent(props: IAuthLoginComponentProps) {
    const bem = new BEM("AuthLogin-component", {});
    bem.Append(props.className);
    const ComponentForgotPassword = ({children}) => {
        return props.componentForgotPassword && props.componentForgotPassword(props, children) || <Fragment>{children}</Fragment>;
    };
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
                <InputLabelComponent>Password</InputLabelComponent>
                <TextFieldComponent onChange={props.onChange} name={"password"} outline id={"password"} placeholder={"Password"} value={props.passwordValue}/>
            </FormGroupComponent>
            <FormGroupComponent form style={{textAlign: "end"}}>
                <ComponentForgotPassword><span className={bem.Children("forgot")}>{props.textForgot || "Forgot Password?"}</span></ComponentForgotPassword>
            </FormGroupComponent>
            <FormGroupComponent form>
                <ButtonComponent type={"submit"} big theme={"mixPurple"}>{props.textButton || "Login"}</ButtonComponent>
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
