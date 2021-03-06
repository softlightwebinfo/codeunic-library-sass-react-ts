import {IProp} from "../../Interfaces/IProp";

export interface IListMenuComponentProps extends IProp {
    active: number;
    data: IListMenuComponentPropsData[];

    onChange?(index: number): void;
}

export interface IListMenuComponentPropsData {
    label: string;
}
