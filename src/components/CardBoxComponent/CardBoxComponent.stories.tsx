import React from "react";
import {CardComponent} from './CardComponent';
import {AvatarComponent, BoxxComponent, ButtonComponent, ButtonIconComponent, CardActionAreaComponent, CardHeaderComponent, FlexGrowComponent, IconComponent, TypographyComponent} from "../..";
import {CardContentComponent} from "./CardContentComponent";
import {CardActionsComponent} from "./CardActionsComponent";
import {text, withKnobs} from "@storybook/addon-knobs";
import {CardMediaComponent} from "../CardMediaComponent/CardMediaComponent";

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
                <ButtonComponent variant={"color"} theme={"white"}>Learn More</ButtonComponent>
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
                <ButtonComponent variant={"color"} theme={"white"}>Learn More</ButtonComponent>
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
            <CardMediaComponent
                image="https://dam.cocinafacil.com.mx/wp-content/uploads/2017/02/paella-mixta.jpg"
                title="Paella dish"
            />
            <CardContentComponent>
                <TypographyComponent variant="body2" color="text-secondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </TypographyComponent>
            </CardContentComponent>
            <CardActionsComponent>
                <ButtonIconComponent>
                    <IconComponent icon={"favorite"}/>
                </ButtonIconComponent>
                <ButtonIconComponent>
                    <IconComponent icon={"share"}/>
                </ButtonIconComponent>
                <FlexGrowComponent/>
                <ButtonIconComponent>
                    <IconComponent icon={"arrow"}/>
                </ButtonIconComponent>
            </CardActionsComponent>
        </CardComponent>
    </BoxxComponent>
);
ComplexInteraction.story = {
    parameters: {
        notes: 'A small component',
    },
};
export const CardMedia = () => (
    <BoxxComponent>
        <CardComponent style={{width: 400}} variant="outlined">
            <CardActionAreaComponent>
                <CardMediaComponent
                    image="https://dam.cocinafacil.com.mx/wp-content/uploads/2017/02/paella-mixta.jpg"
                    title="Contemplative Reptile"
                />
                <CardContentComponent>
                    <TypographyComponent gutterBottom variant="h5" component="h2">
                        Lizard
                    </TypographyComponent>
                    <TypographyComponent variant="body2" color="text-secondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </TypographyComponent>
                </CardContentComponent>
            </CardActionAreaComponent>
            <CardActionsComponent>
                <ButtonComponent variant={"color"} theme="primary">
                    Share
                </ButtonComponent>
                <ButtonComponent variant={"color"} theme="primary">
                    Learn More
                </ButtonComponent>
            </CardActionsComponent>
        </CardComponent>
    </BoxxComponent>
);
