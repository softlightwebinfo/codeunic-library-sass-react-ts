import React from "react";
import {AuthForgotComponent} from './AuthForgotComponent';

// @ts-ignore
export default {
    title: "Components|AuthForgot"
};

export const Default = () => (
    <AuthForgotComponent
        title={"Forgot Password?"}
        subTitle={"Enter your email to get a password reset link"}
        onChange={e => console.log(e)}
        emailValue={"rafael.gonzalez.1737@gmail.com"}
        onSubmit={e => console.log(e)}
        footerAccountText={"Remember your password?"}
        textOtherScreen={"Login"}
    />
);
