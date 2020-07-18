import * as React from 'react';
import {IAttendanceAppState} from "../apps/AttendanceApp/AttendanceApp.types";
import moment from 'moment';

/**
 * @ignore - internal component.
 */
const AttendanceAppContext = React.createContext<IAttendanceAppState>({
    date: moment(),
    rows: [],
});
AttendanceAppContext.displayName = 'AttendanceAppContext';
export default AttendanceAppContext;

