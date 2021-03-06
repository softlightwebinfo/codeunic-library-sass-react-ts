import {IProp} from "../../Interfaces/IProp";
import {ITableColumn, ITableRow} from "../../Interfaces/ITable";

export interface ITableLayoutProps extends IProp {
    onChange?(e: any): any;

    data?: ITableLayoutPropsData;
    columns: ITableColumn[];
    rows: ITableRow[];
}

export type ITableLayoutPropsData = (props: ITableRow) => ITableRow;
