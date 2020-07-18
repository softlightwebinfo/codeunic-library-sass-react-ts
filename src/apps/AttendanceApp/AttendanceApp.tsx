import * as React from "react";
import {IAttendanceAppProps, IAttendanceAppState} from "./AttendanceApp.types";
import "./AttendanceApp.scss";
import AttendanceAppContext from "../../context/AttendanceAppContext";
import {BEM, BreadcrumbComponent, TypographyComponent} from "../..";
import {TableAttendanceLayout} from "../..";
import moment from "moment";

export class AttendanceApp extends React.Component<IAttendanceAppProps, IAttendanceAppState> {
    public state: IAttendanceAppState = {
        date: moment(),
        rows: this.props.rows,
    };

    render() {
        const bm = new BEM('Attendance-app', {});
        return (
            <AttendanceAppContext.Provider value={this.state}>
                <div className={bm.toString()}>
                    <TypographyComponent className={bm.Children("title")} component={"h3"} variant={"h4"}>{this.props.title}</TypographyComponent>
                    <BreadcrumbComponent
                        className={bm.Children("breadcrumb")}
                        data={this.props.breadcrumb}
                    />
                    <TableAttendanceLayout/>
                </div>
            </AttendanceAppContext.Provider>
        );
    }
}
