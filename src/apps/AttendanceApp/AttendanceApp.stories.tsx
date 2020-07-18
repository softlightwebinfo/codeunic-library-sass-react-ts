import React from "react";
import {AttendanceApp} from './AttendanceApp';
import moment from 'moment';
import {rand, randIncluded} from "../../utils";
// @ts-ignore
export default {
    title: "Apps|Attendance"
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
        <AttendanceApp
            breadcrumb={[
                {label: "Dashboard", route: "/"},
                {label: "Attendance"},
            ]}
            rows={[...new Array(100)].map((_, index) => ({
                name: `Name ${index}`,
                avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                days: days(),
            }))}
            title={"Attendance"}
        />
    );
}
