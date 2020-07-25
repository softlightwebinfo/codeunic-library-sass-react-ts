import React from "react";
import {AuthLoginComponent} from './AuthLoginComponent';
// @ts-ignore
export default {
    title: "Components|AuthLogin"
};

export const Default = () => (
    <AuthLoginComponent
        title={"Login"}
        subTitle={"Access to our dashboard"}
        onChange={e => console.log(e)}
        emailValue={"rafael.gonzalez.1737@gmail.com"}
        passwordValue={"1234"}
        onSubmit={e => console.log(e)}
        footerAccountText={"Don't have an account yet?"}
        textOtherScreen={"Register"}
        componentLinkOtherScreen={(props, children) => {
            return <span>{children}</span>
        }}
    />
);
