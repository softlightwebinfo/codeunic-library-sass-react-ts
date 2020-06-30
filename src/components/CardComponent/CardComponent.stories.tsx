import React from "react";
import {CardComponent} from './CardComponent';
import {AvatarComponent, BoxxComponent, ButtonComponent, ButtonIconComponent, CardHeaderComponent, IconComponent, TypographyComponent} from "../..";
import {CardContentComponent} from "./CardContentComponent";
import {CardActionsComponent} from "./CardActionsComponent";
import {text, withKnobs} from "@storybook/addon-knobs";

// @ts-ignore
export default {
    title: "Components|Card",
    parameters: {
        info: {
            inline: false,

        },
    },
    decorators: [withKnobs]
};

export const Default = () => (
    <BoxxComponent>
        <CardComponent style={{width: 280}}>
            <CardContentComponent>
                <TypographyComponent color="secondary" gutterBottom>
                    Word of the Day
                </TypographyComponent>
                <TypographyComponent variant="h5" component="h2">
                    be nev o lent
                </TypographyComponent>
                <TypographyComponent color="secondary">
                    adjective
                </TypographyComponent>
                <TypographyComponent variant="body2" component="p">
                    {'"a benevolent smile"'}
                </TypographyComponent>
            </CardContentComponent>
            <CardActionsComponent>
                <ButtonComponent variant={"color"} theme={"white"} size="small">Learn More</ButtonComponent>
            </CardActionsComponent>
        </CardComponent>
    </BoxxComponent>
);

export const Outlined = () => (
    <BoxxComponent>
        <CardComponent style={{width: 280}} variant="outlined">
            <CardContentComponent>
                <TypographyComponent color="secondary" gutterBottom>
                    Word of the Day
                </TypographyComponent>
                <TypographyComponent variant="h5" component="h2">
                    be nev o lent
                </TypographyComponent>
                <TypographyComponent color="secondary">
                    adjective
                </TypographyComponent>
                <TypographyComponent variant="body2" component="p">
                    well meaning and kindly.
                </TypographyComponent>
            </CardContentComponent>
            <CardActionsComponent>
                <ButtonComponent variant={"color"} theme={"white"} size="small">Learn More</ButtonComponent>
            </CardActionsComponent>
        </CardComponent>
    </BoxxComponent>
);

export const ComplexInteraction = () => (
    <BoxxComponent>
        <CardComponent style={{width: 400}} variant="outlined">
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
ComplexInteraction.story = {
    parameters: {
        notes: 'A small component',
    },
};
