import {IProp} from "../../Interfaces/IProp";
import {IAttendanceAppPropsRow} from "../../apps/AttendanceApp/AttendanceApp.types";
import {Moment} from "moment";

export interface ITableAttendanceLayoutProps extends IProp {
    date?: Moment;
    rows?: IAttendanceAppPropsRow[];
}
