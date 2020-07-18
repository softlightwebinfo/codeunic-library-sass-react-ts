import React from "react";
import {ProjectWidget} from './ProjectWidget';
import {withKnobs} from "@storybook/addon-knobs";
import {AvatarComponent, GridComponent, TypographyComponent} from "../..";

// @ts-ignore
export default {
    title: "Widgets|ProjectWidget",
    parameters: {
        info: {
            inline: false,

        },
    },
    decorators: [withKnobs]
};

export const Default = () => (
    <ProjectWidget
        title={"Office Management"}
        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it"}
        subTitleData={[
            {label: "Open tasks", number: 1},
            {label: "Tasks completed", number: 9},
        ]}
        group={[
            {title: "Deadline", content: <TypographyComponent>{"17 Apr 2019"}</TypographyComponent>}
        ]}
        progressLabel={"Percentage"}
        progress={30}
    />
);
export const All = () => (
    <ProjectWidget
        title={"Office Management"}
        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it"}
        subTitleData={[
            {label: "Open tasks", number: 1},
            {label: "Tasks completed", number: 9},
        ]}
        group={[
            {title: "Deadline", content: <TypographyComponent>{"17 Apr 2019"}</TypographyComponent>},
            {title: "Project Leader", content: (<AvatarComponent mini src={"https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg"}>{"GO"}</AvatarComponent>)},
            {
                title: "Team", content: (
                    <GridComponent container spacing={1}>
                        {[...new Array(4)].map((_, index) => <GridComponent key={index} item><AvatarComponent mini src={"https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg"}>{"GO"}</AvatarComponent></GridComponent>)}
                    </GridComponent>
                )
            },
        ]}
        progressLabel={"Percentage"}
        progress={30}
    />
);
