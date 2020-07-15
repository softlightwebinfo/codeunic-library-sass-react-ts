import React from "react";
import {TableLayout} from './TableLayout';
import {ETableColumnType} from "../../Interfaces/ITable";
import {TableMessageAvatar} from "../../models/TableLayout";
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
