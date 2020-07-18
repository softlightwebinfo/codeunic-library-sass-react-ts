import React from "react";
import {TableAttendanceLayout} from './TableAttendanceLayout';
import moment from 'moment';
import {randIncluded} from "../../utils";
// @ts-ignore
export default {
    title: "Layouts|TableAttendance"
};

export const Default = () => {
    const days = () => {
        let days = moment().daysInMonth();
        let data = {};
        for (let i = 0; i < days; i++) {
            data[i + 1] = !!randIncluded(0, 1);
        }
        return data;
    };
    return (
        <TableAttendanceLayout
            rows={[...new Array(100)].map((_, index) => ({
                name: `Name ${index}`,
                avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                days: days(),
            }))}
            date={moment()}
        />
    );
}
