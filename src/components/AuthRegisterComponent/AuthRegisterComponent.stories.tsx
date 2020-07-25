import React from "react";
import {AuthRegisterComponent} from './AuthRegisterComponent';

// @ts-ignore
export default {
    title: "Components|AuthRegister"
};

export const Default = () => (
    <AuthRegisterComponent
        nameValue={"Rafa"}
        repeatPasswordValue={"1234"}
        title={"Register"}
        subTitle={"Access to our dashboard"}
        onChange={e => console.log(e)}
        emailValue={"rafael.gonzalez.1737@gmail.com"}
        passwordValue={"1234"}
        onSubmit={e => console.log(e)}
        footerAccountText={"Already have an account?"}
        textOtherScreen={"Login"}
        componentLinkOtherScreen={(props, children) => {
            return <span>{children}</span>
        }}
    />
);
