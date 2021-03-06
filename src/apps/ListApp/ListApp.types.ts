import {IProp} from "../../Interfaces/IProp";
import {IBreadcrumbComponentPropsData} from "../../components/BreadcrumbComponent/BreadcrumbComponent.types";
import {ITableColumn} from "../../Interfaces/ITable";
import {ITableLayoutPropsData} from "../../layouts/TableLayout/TableLayout.types";
import {ReactElement} from "react";
import {ITitleRowComponentPropsButton} from "../../components/TitleRowComponent/TitleRowComponent.types";


export interface IListAppProps extends IProp {
    rowElement(props: IListAppPropsRow): ReactElement;

    button: ITitleRowComponentPropsButton;
    rows: IListAppPropsRow[];
    columns: ITableColumn[];
    tableData?: ITableLayoutPropsData;
    title: string;
    breadcrumb: IBreadcrumbComponentPropsData[];
}

export interface IListAppState {
    list: boolean;
}

export interface IListAppPropsRow {
    id: number;

    [p: string]: any;
}
