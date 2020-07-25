import * as React from "react";
import {IAuthRegisterComponentProps} from "./AuthRegisterComponent.types";
import "./AuthRegisterComponent.scss";
import {BEM} from "../../libs";
import {AuthFormComponent, ButtonComponent, FormGroupComponent, InputLabelComponent, TextFieldComponent, TypographyComponent} from "../..";
import {Fragment} from "react";

export function AuthRegisterComponent(props: IAuthRegisterComponentProps) {
    const bem = new BEM("AuthRegister-component", {});
    bem.Append(props.className);
    const ComponentLinkOtherScreen = ({children}) => {
        return props.componentLinkOtherScreen && props.componentLinkOtherScreen(props, children) || <Fragment>{children}</Fragment>;
    };
    return (
        <AuthFormComponent component={"form"} onSubmit={props.onSubmit}>
            <TypographyComponent className={bem.Children("title")} component={"h3"} variant={"h4"}>{props.title}</TypographyComponent>
            <TypographyComponent className={bem.Children("subTitle")} component={"p"}>{props.subTitle}</TypographyComponent>
            <FormGroupComponent form>
                <InputLabelComponent>Name</InputLabelComponent>
                <TextFieldComponent onChange={props.onChange} name={"name"} outline id={"name"} placeholder={"Name"} value={props.nameValue}/>
            </FormGroupComponent>
            <FormGroupComponent form>
                <InputLabelComponent>Email address</InputLabelComponent>
                <TextFieldComponent onChange={props.onChange} name={"email"} outline id={"email"} placeholder={"Email"} value={props.emailValue}/>
            </FormGroupComponent>
            <FormGroupComponent form>
                <InputLabelComponent>Password</InputLabelComponent>
                <TextFieldComponent onChange={props.onChange} name={"password"} outline id={"password"} placeholder={"Password"} value={props.passwordValue}/>
            </FormGroupComponent>
            <FormGroupComponent form>
                <InputLabelComponent>Repeat Password</InputLabelComponent>
                <TextFieldComponent onChange={props.onChange} name={"repeat_password"} outline id={"repeat_password"} placeholder={"Repeat Password"} value={props.repeatPasswordValue}/>
            </FormGroupComponent>
            <FormGroupComponent form>
                <ButtonComponent type={"submit"} big theme={"mixPurple"}>{props.textButton || "Register"}</ButtonComponent>
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
