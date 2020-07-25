import React from "react";
import {AuthLoginLayout} from './AuthLoginLayout';

// @ts-ignore
export default {
    title: "Layouts|AuthLogin"
};

export const Default = () => (
    <AuthLoginLayout
        logo={"https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"}
        routeLogo={"/"}
        logoTitle={"Logo"}
        extras={[
            {label: "Apply Job"},
        ]}
        title={"Login"}
        subTitle={"Access to our dashboard"}
        emailValue={"rafael.gonzalez.1737@gmail.com"}
        passwordValue={"1234"}
        onSubmit={(e) => console.log(e)}
        footerAccountText={"Don't have an account yet?"}
        textOtherScreen={"Register"}
        onChange={e => console.log(e)}
    />
);
