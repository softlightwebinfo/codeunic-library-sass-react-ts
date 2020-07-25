import React from "react";
import {DashboardApp} from './DashboardApp';
import {
    AppBarLayout,
    CardLayout,
    CardStadisticLayout,
    CardWidgetLayout,
    CardWidgetProgressLayout,
    GridComponent,
    IconComponent,
    ListComponent,
    MessageAvatarComponent,
    NotificationListComponent,
    randIncluded,
    StatsInfoComponent,
    TableGroupSmall,
    TableLabel,
    TableMessageAvatar,
    TableProgress
} from "../..";
import {TableLayout} from "../../layouts/TableLayout/TableLayout";
import {ETableColumnType} from "../../Interfaces/ITable";
// @ts-ignore
export default {
    title: "Apps|Dashboard"
};

export const Default = () => {
    return (
        <DashboardApp
            header={{
                title: "Dreamguy's Technologies",
                logo: "https://pluspng.com/img-png/png-logo-design-fancy-png-logo-design-91-on-professional-logo-design-with-png-logo-design-734.png",
                routeLogo: "/",
                search: {
                    placeholder: "Search here"
                },
                langData: [
                    {value: 1, label: "English", icon: <i/>},
                    {value: 2, label: "Spanish", icon: <i/>},
                    {value: 3, label: "German", icon: <i/>},
                    {value: 4, label: "French", icon: <i/>},
                ],
                menuLogin: [
                    {value: 1, label: "My profile", icon: <i/>},
                    {value: 2, label: "Settings", icon: <i/>},
                    {value: 3, label: "Logout", icon: <i/>},
                ],
                isLogin: true,
                lang: 2,
                notifications: [...new Array(30)].map((_, index) => ({
                    avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                    date: "23-10-19",
                    description: "Will you tell me something about yourself?",
                    name: `Name ${index}`
                })),
                messages: [...new Array(30)].map((_, index) => ({
                    avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                    date: "23-10-19",
                    description: "Will you tell me something about yourself?",
                    name: `Name ${index}`
                })),
                login: {
                    avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                    name: "Administrator",
                    status: "online",
                }
            }}
            menu={[
                {name: "Main", menu: [], header: true},
                {
                    name: "Dashboard", icon: <IconComponent icon={"menu"}/>, menu: [
                        {name: "Admin", menu: []},
                        {name: "Employee", menu: []},
                    ]
                },
                {
                    name: "Apps", icon: <IconComponent icon={"menu"}/>, menu: [
                        {name: "Chat", menu: []},
                        {name: "Calendar", menu: []},
                        {name: "Contacts", menu: []},
                        {name: "Email", menu: []},
                        {name: "File Manager", menu: []},
                    ]
                },
                {name: "Employee", menu: [], header: true},
                {
                    name: "Employees", icon: <IconComponent icon={"user"}/>, menu: [
                        {name: "All Employees", menu: []},
                        {name: "Holidays", menu: []},
                        {name: "Leaves (Admin)", menu: []},
                        {name: "Leaves (Employee)", menu: []},
                        {name: "Leave Setting", menu: []},
                        {name: "Attendance (Admin)", menu: []},
                        {name: "Attendance (Employee)", menu: []},
                        {name: "Departments", menu: []},
                        {name: "Designations", menu: []},
                        {name: "Timesheet", menu: []},
                        {name: "Overtime", menu: []},
                    ],
                },
                {name: "Clients", icon: <IconComponent icon={"user"}/>, menu: []},
                {
                    name: "Projects", icon: <IconComponent icon={"user"}/>, menu: [
                        {name: "Projects", menu: []},
                        {name: "Tasks", menu: []},
                        {name: "Task Board", menu: []},
                    ],
                },
                {name: "Leads", icon: <IconComponent icon={"user"}/>, menu: []},
                {name: "Tickets", icon: <IconComponent icon={"user"}/>, menu: []},
                {name: "HR", menu: [], header: true},
                {
                    name: "Accounts", icon: <IconComponent icon={"user"}/>, menu: [
                        {name: "Estimates", menu: []},
                        {name: "Invoices", menu: []},
                        {name: "Payments", menu: []},
                        {name: "Expenses", menu: []},
                        {name: "Provident Fund", menu: []},
                        {name: "Taxes", menu: []},
                    ]
                },
                {
                    name: "Payroll", icon: <IconComponent icon={"user"}/>, menu: [
                        {name: "Employee Salary", menu: []},
                        {name: "Payslip", menu: []},
                        {name: "Payroll items", menu: []},
                    ]
                },
                {name: "Policies", icon: <IconComponent icon={"user"}/>, menu: []},
                {
                    name: "Reports", icon: <IconComponent icon={"user"}/>, menu: [
                        {name: "Expense Report", menu: []},
                        {name: "Invoice Report", menu: []},
                    ]
                },
                {name: "Performance", menu: [], header: true},
                {
                    name: "Performance", icon: <IconComponent icon={"user"}/>, menu: [
                        {name: "Performance Indicator", menu: []},
                        {name: "Performance Review", menu: []},
                        {name: "Performance Appraisal", menu: []},
                    ]
                },
                {
                    name: "Goals", icon: <IconComponent icon={"user"}/>, menu: [
                        {name: "Goal List", menu: []},
                        {name: "Goal Type", menu: []},
                    ]
                },
                {
                    name: "Training", icon: <IconComponent icon={"user"}/>, menu: [
                        {name: "Training List", menu: []},
                        {name: "Trainers", menu: []},
                        {name: "Training Type", menu: []},
                    ]
                },
                {name: "Promotion", icon: <IconComponent icon={"user"}/>, menu: []},
                {name: "Resignation", icon: <IconComponent icon={"user"}/>, menu: []},
                {name: "Termination", icon: <IconComponent icon={"user"}/>, menu: []},
                {name: "Administration", menu: [], header: true},
                {name: "Assets", icon: <IconComponent icon={"user"}/>, menu: []},
                {
                    name: "Jobs", icon: <IconComponent icon={"user"}/>, menu: [
                        {name: "Manage Jobs", menu: []},
                        {name: "Applied Candidates", menu: []},
                    ]
                },
                {name: "Knowledgebase", icon: <IconComponent icon={"user"}/>, menu: []},
                {name: "Activities", icon: <IconComponent icon={"user"}/>, menu: []},
                {name: "Users", icon: <IconComponent icon={"user"}/>, menu: []},
                {name: "Settings", icon: <IconComponent icon={"user"}/>, menu: []},
            ]}
            title={{
                title: "Welcome Admin!",
                breadcrumb: [
                    {label: "Dashboard", route: "/"}
                ],
            }}
        >
            <GridComponent container spacing={4}>
                <GridComponent item xs={12}>
                    <GridComponent
                        container
                        spacing={4}
                    >
                        <GridComponent
                            item
                            xs={3}
                        >
                            <CardWidgetLayout
                                icon="alarm"
                                subTitle="Project"
                                title="112"
                            />
                        </GridComponent>
                        <GridComponent
                            item
                            xs={3}
                        >
                            <CardWidgetLayout
                                icon="alarm"
                                subTitle="Project"
                                title="112"
                            />
                        </GridComponent>
                        <GridComponent
                            item
                            xs={3}
                        >
                            <CardWidgetLayout
                                icon="alarm"
                                subTitle="Project"
                                title="112"
                            />
                        </GridComponent>
                        <GridComponent
                            item
                            xs={3}
                        >
                            <CardWidgetLayout
                                icon="alarm"
                                subTitle="Project"
                                title="112"
                            />
                        </GridComponent>
                    </GridComponent>
                </GridComponent>
                <GridComponent item xs={12}>
                    <ListComponent
                        horizontal
                        style={{
                            width: '100%'
                        }}
                    >
                        <CardWidgetProgressLayout
                            lastValue={200}
                            progress={79}
                            subTitle="Previous Month"
                            title="New Employees"
                            value={150}
                        />
                        <CardWidgetProgressLayout
                            lastValue={200}
                            progress={79}
                            subTitle="Previous Month"
                            title="New Employees"
                            value={150}
                        />
                        <CardWidgetProgressLayout
                            lastValue={200}
                            progress={79}
                            subTitle="Previous Month"
                            title="New Employees"
                            value={150}
                        />
                        <CardWidgetProgressLayout
                            lastValue={200}
                            progress={79}
                            subTitle="Previous Month"
                            title="New Employees"
                            value={150}
                        />
                    </ListComponent>
                </GridComponent>
                <GridComponent item xs={12} sm={4}>
                    <CardLayout title={"Statistics"} style={{backgroundColor: "white"}}>
                        <ListComponent>
                            <StatsInfoComponent
                                title="Total leave"
                                total={100}
                                value={20}
                            />
                            <StatsInfoComponent
                                title="Total leave"
                                total={100}
                                value={20}
                            />
                            <StatsInfoComponent
                                title="Total leave"
                                total={100}
                                value={20}
                            />
                            <StatsInfoComponent
                                title="Total leave"
                                total={100}
                                value={20}
                            />
                            <StatsInfoComponent
                                title="Total leave"
                                total={100}
                                value={20}
                            />
                        </ListComponent>
                    </CardLayout>
                </GridComponent>
                <GridComponent item xs={12} sm={4}>
                    <CardStadisticLayout
                        data={[
                            {
                                color: 'success',
                                subTitle: '166',
                                title: 'Completed Tasks'
                            },
                            {
                                color: 'gray',
                                subTitle: '115',
                                title: 'Completed Tasks'
                            },
                            {
                                color: 'info',
                                subTitle: '31',
                                title: 'Completed Tasks'
                            },
                            {
                                color: 'warning',
                                subTitle: '47',
                                title: 'Completed Tasks'
                            },
                            {
                                color: 'danger',
                                subTitle: '5',
                                title: 'Completed Tasks'
                            }
                        ]}
                        progress={[
                            {
                                color: 'success',
                                value: 10
                            },
                            {
                                color: 'primary',
                                value: 40
                            },
                            {
                                color: 'secondary',
                                value: 20
                            },
                            {
                                color: 'gray',
                                value: 5
                            },
                            {
                                color: 'success',
                                value: 25
                            }
                        ]}
                        stadistics={[
                            {
                                title: 'Total tasks',
                                value: 385
                            },
                            {
                                title: 'Overdue Task',
                                value: 19
                            }
                        ]}
                        style={{
                            backgroundColor: 'white',
                            color: 'black',
                        }}
                        title="Task Stadistics"
                    />
                </GridComponent>
                <GridComponent item xs={12} sm={4}>
                    <CardLayout title={"Messages"} style={{backgroundColor: "white"}}>
                        <NotificationListComponent
                            data={[...new Array(5)].map((_, index) => ({
                                name: `Name ${index + 1}`,
                                avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                                date: "now",
                                description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                            }))}
                        />
                    </CardLayout>
                </GridComponent>
                <GridComponent item xs={12} sm={6}>
                    <CardLayout title={"Invoices"} style={{backgroundColor: "white"}}>
                        <TableLayout
                            columns={[
                                {key: "id", data: "Invoice ID", type: ETableColumnType.STRING},
                                {key: "client", data: "Client", type: ETableColumnType.STRING},
                                {key: "date", data: "Due Date", type: ETableColumnType.DATE},
                                {key: "total", data: "Total", type: ETableColumnType.STRING},
                                {key: "status", data: "Status", type: ETableColumnType.LABEL},
                            ]}
                            rows={[...new Array(3)].map((_, index) => ({
                                id: `#INV-000${index}`,
                                client: `Name ${index}`,
                                date: `2020-10-08 10:20`,
                                total: `${index * randIncluded(0, 1000)}€`,
                                status: new TableLabel(`label ${index}`, "orange"),
                            }))}
                        />
                    </CardLayout>
                </GridComponent>
                <GridComponent item xs={12} sm={6}>
                    <CardLayout title={"Payments"} style={{backgroundColor: "white"}}>
                        <TableLayout
                            columns={[
                                {key: "id", data: "Invoice ID", type: ETableColumnType.STRING},
                                {key: "client", data: "Client", type: ETableColumnType.STRING},
                                {key: "payment", data: "Payment type", type: ETableColumnType.STRING},
                                {key: "date", data: "Due Date", type: ETableColumnType.DATE},
                                {key: "total", data: "Total", type: ETableColumnType.STRING},
                            ]}
                            rows={[...new Array(3)].map((_, index) => ({
                                id: `#INV-000${index}`,
                                client: `Name ${index}`,
                                date: `2020-10-08 10:20`,
                                total: `${index * randIncluded(0, 1000)}€`,
                                payment: "Paypal",
                            }))}
                        />
                    </CardLayout>
                </GridComponent>
                <GridComponent item xs={12} sm={6}>
                    <CardLayout title={"Clients"} style={{backgroundColor: "white"}}>
                        <TableLayout
                            columns={[
                                {
                                    data: 'Name',
                                    key: 'name_data',
                                    type: 8
                                },
                                {
                                    data: 'Email',
                                    key: 'email',
                                    type: 5
                                },
                                {
                                    data: 'Status',
                                    key: 'status',
                                    type: 9
                                },
                                {
                                    align: 'right',
                                    data: 'Action',
                                    key: 'role',
                                    type: 3
                                }
                            ]}
                            data={props => ({
                                ...props,
                                name_data: new TableMessageAvatar(props.name, props.name, props.role, "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg")
                            })}
                            rows={[
                                {
                                    email: 'barrycuda@example.com',
                                    name: 'Barry Cuda',
                                    role: 'CEO1',
                                    status: true
                                },
                                {
                                    email: 'barrycuda@example1.com',
                                    name: 'Barry Cuda1',
                                    role: 'CEO2',
                                    status: true
                                },
                                {
                                    email: 'barrycuda@example2.com',
                                    name: 'Barry Cuda2',
                                    role: 'CEO3',
                                    status: true
                                },
                                {
                                    email: 'barrycuda@example3.com',
                                    name: 'Barry Cuda3',
                                    role: 'CEO4',
                                    status: true
                                },
                                {
                                    email: 'barrycuda@example4.com',
                                    name: 'Barry Cuda4',
                                    role: 'CEO5',
                                    status: true
                                },
                                {
                                    email: 'barrycuda@example5.com',
                                    name: 'Barry Cuda5',
                                    role: 'CEO6',
                                    status: true
                                },
                                {
                                    email: 'barrycuda@example6.com',
                                    name: 'Barry Cuda6',
                                    role: 'CEO7',
                                    status: true
                                }
                            ]}
                        />
                    </CardLayout>
                </GridComponent>
                <GridComponent item xs={12} sm={6}>
                    <CardLayout title={"Clients"} style={{backgroundColor: "white"}}>
                        <TableLayout
                            columns={[
                                {
                                    data: 'Project Name',
                                    key: 'projectName',
                                    type: 1
                                },
                                {
                                    data: 'Progress',
                                    key: 'progress',
                                    type: 2
                                },
                                {
                                    align: 'right',
                                    data: 'Action',
                                    key: '',
                                    type: 3
                                }
                            ]}
                            data={props => ({
                                ...props,
                                projectName: new TableGroupSmall("Office Management", [
                                    {number: 1, label: "open tasks"},
                                    {number: 10, label: "tasks completed"},
                                ]),
                                progress: new TableProgress(randIncluded(0, 100), "info"),
                            })}
                            rows={[
                                {
                                    email: 'barrycuda@example.com',
                                    name: 'Office Management',
                                    role: 'CEO1',
                                    status: true,
                                    value: 12
                                },
                                {
                                    email: 'barrycuda@example1.com',
                                    name: 'Office Management',
                                    role: 'CEO2',
                                    status: true,
                                    value: 32
                                },
                                {
                                    email: 'barrycuda@example2.com',
                                    name: 'Office Management',
                                    role: 'CEO3',
                                    status: true,
                                    value: 42
                                },
                                {
                                    email: 'barrycuda@example3.com',
                                    name: 'Office Management',
                                    role: 'CEO4',
                                    status: true,
                                    value: 60
                                },
                                {
                                    email: 'barrycuda@example4.com',
                                    name: 'Office Management',
                                    role: 'CEO5',
                                    status: true,
                                    value: 2
                                },
                                {
                                    email: 'barrycuda@example5.com',
                                    name: 'Office Management',
                                    role: 'CEO6',
                                    status: true,
                                    value: 0
                                },
                                {
                                    email: 'barrycuda@example6.com',
                                    name: 'Office Management',
                                    role: 'CEO7',
                                    status: true,
                                    value: 92
                                }
                            ]}
                        />
                    </CardLayout>
                </GridComponent>
            </GridComponent>
        </DashboardApp>
    );
};
