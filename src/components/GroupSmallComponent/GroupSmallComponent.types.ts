import {IProp} from "../../Interfaces/IProp";

export interface IGroupSmallComponentProps extends IProp {
    name: string;
    data: IGroupSmallComponentPropsData[]
}

export interface IGroupSmallComponentPropsData {
    number: number;
    label: string;
}
