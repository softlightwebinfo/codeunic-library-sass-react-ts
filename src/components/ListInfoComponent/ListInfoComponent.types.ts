import {IProp} from "../../Interfaces/IProp";

export interface IListInfoComponentProps extends IProp {
    data: IListInfoComponentPropsData[];
}

export interface IListInfoComponentPropsData {
    title: string;
    value: string;
}
