import {IAlign} from "./IAlign";

export interface ITableColumn {
    format?: string;
    key: string;
    data: string;
    type?: ETableColumnType;
    align?: IAlign;
}

export interface ITableRow {
    [p: string]: any;
}

export enum ETableColumnType {
    LABEL,
    GROUP_SMALL,
    PROGRESS,
    ACTION,
    COMPONENT,
    STRING,
    NUMBER,
    DATE,
    MESSAGE_AVATAR,
    STATUS,
}
