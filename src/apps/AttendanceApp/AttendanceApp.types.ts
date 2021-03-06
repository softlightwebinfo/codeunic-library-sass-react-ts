import {IProp} from "../../Interfaces/IProp";
import {IBreadcrumbComponentPropsData} from "../../components/BreadcrumbComponent/BreadcrumbComponent.types";
import {Moment} from "moment";

export interface IAttendanceAppProps extends IProp {
    breadcrumb: IBreadcrumbComponentPropsData[];
    title: string;
    rows: IAttendanceAppPropsRow[];
}

export interface IAttendanceAppState {
    date: Moment;
    rows: IAttendanceAppPropsRow[];
}

export interface IAttendanceAppPropsRow {
    name: string;
    avatar: string;
    days: { [p: number]: boolean }
}
