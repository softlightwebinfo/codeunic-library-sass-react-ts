import {IAlign} from "./IAlign";

export interface ITableColumn {
    key: string;
    data: string;
    type?: ETableColumnType;
    align?: IAlign;
}

export interface ITableRow {
    [p: string]: any;
}

export enum ETableColumnType {
    ACTION,
    COMPONENT,
    STRING,
    NUMBER,
    DATE,
    MESSAGE_AVATAR,
    STATUS,
}
