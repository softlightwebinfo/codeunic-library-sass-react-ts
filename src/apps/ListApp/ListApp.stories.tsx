import React from "react";
import {ListApp} from './ListApp';
import {ETableColumnType} from "../../Interfaces";
import {TableMessageAvatar} from "../../models";
import {AvatarComponent, DotComponent, DropdownComponent, GridComponent, ProfileWidget, ProjectWidget, TypographyComponent} from "../..";
import {IOnClick} from "../../Interfaces";
// @ts-ignore
export default {
    title: "Apps|List"
};

export const Default = () => (
    <ListApp
        button={{
            icon: "plus",
            label: "New Employee",
            onClick(e: IOnClick): any {

            }
        }}
        rowElement={row => (
            <ProfileWidget
                category={row.category}
                avatar={row.avatar}
                name={row.name}
            />
        )}
        rows={[...new Array(100)].map((_, index) => ({
            id: index,
            avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
            name: `Name ${index}`,
            category: `Category ${index}`,
            email: "email@gmail.com",
            date: "2020-10-20 20:10",
        }))}
        columns={[
            {key: "name", data: "Name", type: ETableColumnType.MESSAGE_AVATAR},
            {key: "id", data: "Employee ID", type: ETableColumnType.STRING},
            {key: "email", data: "Email", type: ETableColumnType.STRING},
            {key: "email", data: "Mobile", type: ETableColumnType.STRING},
            {key: "date", data: "Join Date", type: ETableColumnType.DATE, format: "DD/MM/YYYY"},
            {key: "", data: "Action", type: ETableColumnType.ACTION, align: "right"},
        ]}
        breadcrumb={[
            {label: "Dashboard", route: "/"},
            {label: "Employees"},
        ]}
        tableData={props => ({
            ...props,
            name: new TableMessageAvatar(props.name, props.name, props.category, props.avatar),
        })}
        title={"Employees"}
    />
);
export const Projects = () => (
    <ListApp
        button={{
            icon: "plus",
            label: "New Project",
            onClick(e: IOnClick): any {

            }
        }}
        rowElement={row => (
            <ProjectWidget
                title={row.name}
                description={row.description}
                subTitleData={[
                    {label: "Open tasks", number: 1},
                    {label: "Tasks completed", number: 9},
                ]}
                group={[
                    {title: "Deadline", content: <TypographyComponent>{row.date}</TypographyComponent>},
                    {title: "Project Leader", content: (<AvatarComponent mini src={row.avatar}>{row.leader.slice(0, 2)}</AvatarComponent>)},
                    {
                        title: "Team", content: (
                            <GridComponent container spacing={1}>
                                {[...new Array(4)].map((_, index) => <GridComponent key={index} item><AvatarComponent mini src={row.avatar}>{row.leader.slice(0, 2)}</AvatarComponent></GridComponent>)}
                            </GridComponent>
                        )
                    },
                ]}
                progressLabel={"Percentage"}
                progress={30}
            />
        )}
        rows={[...new Array(100)].map((_, index) => ({
            id: index,
            avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
            leader: `Gonzalez`,
            name: `Office Management ${index}`,
            category: `Category ${index}`,
            email: "email@gmail.com",
            date: "2020-10-20 20:10",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it"
        }))}
        columns={[
            {key: "projectName", data: "Project", type: ETableColumnType.COMPONENT},
            {key: "id", data: "Project ID", type: ETableColumnType.STRING},
            {key: "leader", data: "Leader", type: ETableColumnType.COMPONENT},
            {key: "team", data: "Team", type: ETableColumnType.COMPONENT},
            {key: "date", data: "Deadline", type: ETableColumnType.DATE},
            {key: "priority", data: "Priority", type: ETableColumnType.COMPONENT},
            {key: "status", data: "Status", type: ETableColumnType.COMPONENT},
            {key: "", data: "Action", type: ETableColumnType.ACTION, align: "right"},
        ]}
        breadcrumb={[
            {label: "Dashboard", route: "/"},
            {label: "Projects"},
        ]}
        tableData={props => ({
            ...props,
            projectName: <a href="/">{props.name}</a>,
            leader: <AvatarComponent src={props.avatar} mini>{props.leader}</AvatarComponent>,
            team: (
                <GridComponent container spacing={1}>
                    {[...new Array(4)].map((_, index) => <GridComponent key={index} item><AvatarComponent mini src={props.avatar}>{props.leader.slice(0, 2)}</AvatarComponent></GridComponent>)}
                </GridComponent>
            ),
            priority: (
                <DropdownComponent
                    value={1}
                    data={[
                        {value: 1, label: "High", icon: <DotComponent color={"danger"}/>},
                        {value: 2, label: "Medium", icon: <DotComponent color={"success"}/>},
                        {value: 3, label: "Low", icon: <DotComponent color={"gray"}/>},
                    ]}
                />
            ),
            status: (
                <DropdownComponent
                    value={1}
                    data={[
                        {value: 1, label: "Active", icon: <DotComponent color={"success"}/>},
                        {value: 2, label: "Inactive", icon: <DotComponent color={"success"}/>},
                    ]}
                />
            ),
        })}
        title={"Projects"}
    />
);
