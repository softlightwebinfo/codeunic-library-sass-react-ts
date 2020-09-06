import React from "react";
import { SectionBoxComponent } from './SectionBoxComponent';
import { string } from "prop-types";
import { BoxComponent, ButtonComponent } from "../..";

// @ts-ignore
export default {
    title: "Components/SectionBox"
};

export const Default = () => (
    <SectionBoxComponent
        header={{
            center: {
                title: "Welcome on Board",
                description: "Now you are one of us! We prepared a few tips for you to start:"
            },
            left: {
                image: "https://images.vexels.com/media/users/3/145821/isolated/preview/44247e29bf035ece825b8b2bf8af88c2-ilustraci--n-de-cohete-ilustraci--n-de-cohete-by-vexels.png",
                title: "Cohete"
            },
            right: {
                image: "https://toppng.com/public/uploads/thumbnail/luna-animada-png-luna-11562938469r8pzcrmu7c.png",
                title: "Luna"
            }
        }}
    />
);
export const Content = () => (
    <SectionBoxComponent
        header={{
            center: {
                title: "Welcome on Board",
                description: "Now you are one of us! We prepared a few tips for you to start:"
            },
            left: {
                image: "https://images.vexels.com/media/users/3/145821/isolated/preview/44247e29bf035ece825b8b2bf8af88c2-ilustraci--n-de-cohete-ilustraci--n-de-cohete-by-vexels.png",
                title: "Cohete"
            },
            right: {
                image: "https://toppng.com/public/uploads/thumbnail/luna-animada-png-luna-11562938469r8pzcrmu7c.png",
                title: "Luna"
            }
        }}
    >
        <BoxComponent
            title={"Adding Ressources"}
            description={"How to add new resources to the sidebar"}
            image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
        />
        <BoxComponent
            title={"Adding Ressources"}
            description={"How to add new resources to the sidebar"}
            image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
        />
        <BoxComponent
            title={"Adding Ressources"}
            description={"How to add new resources to the sidebar"}
            image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
        />
        <BoxComponent
            title={"Adding Ressources"}
            description={"How to add new resources to the sidebar"}
            image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
        />
        <BoxComponent
            title={"Adding Ressources"}
            description={"How to add new resources to the sidebar"}
            image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
        />
        <BoxComponent
            title={"Adding Ressources"}
            description={"How to add new resources to the sidebar"}
            image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
        />
        <BoxComponent
            isRow
            title={"Adding Ressources"}
            description={"How to add new resources to the sidebar"}
            image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
        />
        <BoxComponent
            isRow
            title={"Adding Ressources"}
            description={"How to add new resources to the sidebar"}
            image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
        />
        <BoxComponent
            isFull
            title={"Adding Ressources"}
            description={"How to add new resources to the sidebar"}
            image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
        >
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
            }}>
                <ButtonComponent theme={"primary"}>Contact US</ButtonComponent>
            </div>
        </BoxComponent>
    </SectionBoxComponent>
);
