import * as React from 'react';
import AttendanceAppContext from "./AttendanceAppContext";

export default function useAttendanceAppContext() {
    return React.useContext(AttendanceAppContext);
}
