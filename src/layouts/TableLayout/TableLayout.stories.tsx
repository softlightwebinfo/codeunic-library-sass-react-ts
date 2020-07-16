import React from "react";
import {TableLayout} from './TableLayout';
import {ETableColumnType} from "../../Interfaces/ITable";
import {TableGroupSmall, TableMessageAvatar, TableProgress} from "../../models/TableLayout";
// @ts-ignore
export default {
    title: "Layouts|Table"
};

export const Default = () => (
    <TableLayout
        data={(props) => ({
            ...props,
            name_data: new TableMessageAvatar("RM", props.name, props.role),
        })}
        columns={[
            {key: "name_data", data: "Name", type: ETableColumnType.MESSAGE_AVATAR},
            {key: "email", data: "Email", type: ETableColumnType.STRING},
            {key: "status", data: "Status", type: ETableColumnType.STATUS},
            {key: "role", data: "Action", type: ETableColumnType.ACTION, align: "right"},
        ]}
        rows={[
            {name: "Barry Cuda", email: "barrycuda@example.com", status: true, role: "CEO1"},
            {name: "Barry Cuda1", email: "barrycuda@example1.com", status: true, role: "CEO2"},
            {name: "Barry Cuda2", email: "barrycuda@example2.com", status: true, role: "CEO3"},
            {name: "Barry Cuda3", email: "barrycuda@example3.com", status: true, role: "CEO4"},
            {name: "Barry Cuda4", email: "barrycuda@example4.com", status: true, role: "CEO5"},
            {name: "Barry Cuda5", email: "barrycuda@example5.com", status: true, role: "CEO6"},
            {name: "Barry Cuda6", email: "barrycuda@example6.com", status: true, role: "CEO7"},
        ]}
    />
);

export const Projects = () => (
    <TableLayout
        data={(props) => ({
            ...props,
            projectName: new TableGroupSmall(props.name, [
                {label: "open tasks", number: 1},
                {label: "tasks completed", number: 9},
            ]),
            progress: new TableProgress(props.value, "primary"),
        })}
        columns={[
            {key: "projectName", data: "Project Name", type: ETableColumnType.GROUP_SMALL},
            {key: "progress", data: "Progress", type: ETableColumnType.PROGRESS},
            {key: "", data: "Action", type: ETableColumnType.ACTION, align: "right"},
        ]}
        rows={[
            {name: "Office Management", email: "barrycuda@example.com", status: true, value: 12, role: "CEO1"},
            {name: "Office Management", email: "barrycuda@example1.com", status: true, value: 32, role: "CEO2"},
            {name: "Office Management", email: "barrycuda@example2.com", status: true, value: 42, role: "CEO3"},
            {name: "Office Management", email: "barrycuda@example3.com", status: true, value: 60, role: "CEO4"},
            {name: "Office Management", email: "barrycuda@example4.com", status: true, value: 2, role: "CEO5"},
            {name: "Office Management", email: "barrycuda@example5.com", status: true, value: 0, role: "CEO6"},
            {name: "Office Management", email: "barrycuda@example6.com", status: true, value: 92, role: "CEO7"},
        ]}
    />
);
