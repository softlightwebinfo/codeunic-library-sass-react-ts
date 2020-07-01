import React from "react";
import {AvatarComponent, BoxxComponent, ButtonIconComponent, CardComponent, CardHeaderComponent, IconComponent} from "../..";
import {text, withKnobs} from "@storybook/addon-knobs";
// @ts-ignore
export default {
    title: "Components|CardHeader",
    parameters: {
        info: {
            inline: false,

        },
    },
    decorators: [withKnobs]
};

export const Default = () => (
    <BoxxComponent>
        <CardHeaderComponent
            title={text("title", "Shrimp and Chorizo Paella")}
            subheader={text("subheader", "September 14, 2016")}
            avatar={
                <AvatarComponent>
                    {text("avatar", "R")}
                </AvatarComponent>
            }
            action={
                <ButtonIconComponent>
                    <IconComponent icon={text("icon", "more_vert")}/>
                </ButtonIconComponent>
            }
        />
    </BoxxComponent>
);
export const Card = () => (
    <BoxxComponent>
        <CardComponent>
            <CardHeaderComponent
                title={text("title", "Shrimp and Chorizo Paella")}
                subheader={text("subheader", "September 14, 2016")}
                avatar={
                    <AvatarComponent>
                        {text("avatar", "R")}
                    </AvatarComponent>
                }
                action={
                    <ButtonIconComponent>
                        <IconComponent icon={text("icon", "more_vert")}/>
                    </ButtonIconComponent>
                }
            />
        </CardComponent>
    </BoxxComponent>
);
