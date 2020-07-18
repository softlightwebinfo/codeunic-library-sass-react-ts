import {IProp} from "../../Interfaces/IProp";
import {IBreadcrumbComponentPropsData} from "../../components/BreadcrumbComponent/BreadcrumbComponent.types";
import {IProfileWidgetProps} from "../../widgets/ProfileWidget/ProfileWidget.types";
import {ITableColumn} from "../../Interfaces/ITable";
import {ITableLayoutPropsData} from "../../layouts/TableLayout/TableLayout.types";


export interface IListAppProps extends IProp {
    rows: IListAppPropsRow[];
    columns: ITableColumn[];
    tableData?: ITableLayoutPropsData;
    title: string;
    breadcrumb: IBreadcrumbComponentPropsData[];
}

export interface IListAppState {
    list: boolean;
}

export interface IListAppPropsRow extends IProfileWidgetProps {
    id: number;
}
