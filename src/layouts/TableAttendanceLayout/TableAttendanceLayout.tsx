import * as React from "react";
import {ITableAttendanceLayoutProps} from "./TableAttendanceLayout.types";
import "./TableAttendanceLayout.scss";
import {BEM, IconComponent, MessageAvatarComponent, TableColComponent, TableComponent, TableRowComponent} from "../..";
import useAttendanceAppContext from "../../context/useAttendanceAppContext";
import moment from 'moment';

export function TableAttendanceLayout(props: ITableAttendanceLayoutProps) {
    const bem = new BEM("TableAttendance-layout", {});
    bem.Append(props.className);
    const use = useAttendanceAppContext();
    let rows = props.rows ? props.rows : use.rows || [];
    let date = props.date ? props.date : use.date || moment();
    return (
        <div style={props.style} className={bem.toString()}>
            <TableComponent>
                <TableRowComponent header>
                    <TableColComponent>Employee</TableColComponent>
                    {[...new Array(date.daysInMonth())].map((item, index) => (
                        <TableColComponent key={index + 1}>{(index + 1).toString()}</TableColComponent>
                    ))}
                </TableRowComponent>
                {rows.map((row, index) => (
                    <TableRowComponent key={index}>
                        <TableColComponent>
                            <MessageAvatarComponent mini src={row.avatar} name={row.name} title={row.name} subTitle={""}/>
                        </TableColComponent>
                        {Object.entries(row.days).map((item) => (
                            <TableColComponent key={item[0]}>
                                {item[1] ? <IconComponent className={bem.Children('check')} icon={"check"}/> : <IconComponent className={bem.Children("uncheck")} icon={"uncheck"}/>}
                            </TableColComponent>
                        ))}
                    </TableRowComponent>
                ))}
            </TableComponent>
        </div>
    );
}
