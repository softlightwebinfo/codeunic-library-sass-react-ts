import React from "react";
import {AuthForgotLayout} from './AuthForgotLayout';

// @ts-ignore
export default {
    title: "Layouts|AuthForgot"
};

export const Default = () => (
    <AuthForgotLayout
        logo={"https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"}
        routeLogo={"/"}
        logoTitle={"Logo"}
        extras={[
            {label: "Apply Job"},
        ]}
        title={"Forgot Password?"}
        subTitle={"Enter your email to get a password reset link"}
        emailValue={"rafael.gonzalez.1737@gmail.com"}
        passwordValue={"1234"}
        onSubmit={(e) => console.log(e)}
        footerAccountText={"Remember your password?"}
        textOtherScreen={"Login"}
        onChange={e => console.log(e)}
    />
);
