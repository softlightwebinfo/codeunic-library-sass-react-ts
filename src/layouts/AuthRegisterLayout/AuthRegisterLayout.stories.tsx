import React from "react";
import {AuthRegisterLayout} from './AuthRegisterLayout';

// @ts-ignore
export default {
    title: "Layouts|AuthRegister"
};

export const Default = () => (
    <AuthRegisterLayout
        logo={"https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"}
        routeLogo={"/"}
        logoTitle={"Logo"}
        extras={[
            {label: "Apply Job"},
        ]}
        title={"Register"}
        subTitle={"Access to our dashboard"}
        emailValue={"rafael.gonzalez.1737@gmail.com"}
        passwordValue={"1234"}
        onSubmit={(e) => console.log(e)}
        footerAccountText={"Already have an account?"}
        textOtherScreen={"Login"}
        onChange={e => console.log(e)}
        repeatPasswordValue={"1234"}
        nameValue={"Rafa"}
    />
);
