import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { CardBoxComponent } from "./CardBoxComponent";
import { AuthLoginComponent } from "../..";

// @ts-ignore
export default {
    title: "Components/CardBox",
    parameters: {
        info: {
            inline: false,

        },
    },
    decorators: [withKnobs]
};

export const Default = () => (
    <CardBoxComponent
        title={"Welcome"}
        description={"to the demo application made with AdminBro - the best admin framework for Node.js apps, based on React."}
        image={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/1020px-SARS-CoV-2_without_background.png"}
        footer={"Made with heart by codeunic"}
    >
        <AuthLoginComponent
            onChange={console.log} textOtherScreen={"Register"} footerAccountText={"Create Account"}
            emailValue={""} passwordValue={""} onSubmit={console.log} title={"Login"}
            subTitle={"Iniciar sesión"}
        />
    </CardBoxComponent>
);