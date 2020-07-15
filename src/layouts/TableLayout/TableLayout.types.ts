import {IProp} from "../../Interfaces/IProp";
import {ITableColumn, ITableRow} from "../../Interfaces/ITable";

export interface ITableLayoutProps extends IProp {
    onChange?(e: any): any;

    data?: (props: ITableRow) => ITableRow;
    columns: ITableColumn[];
    rows: ITableRow[];
}
