import React from "react";
import {ListApp} from './ListApp';
import {ETableColumnType} from "../../Interfaces/ITable";
import {TableMessageAvatar} from "../../models";
// @ts-ignore
export default {
    title: "Apps|List"
};

export const Default = () => (
    <ListApp
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
