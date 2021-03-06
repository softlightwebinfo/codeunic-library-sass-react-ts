import {IProp} from "../../Interfaces/IProp";

export interface IStatsInfoComponentProps extends IProp {
    title: string;
    total: number;
    value: number;
}
