import {IProp} from "../../Interfaces/IProp";

export interface IContactContComponentProps extends IProp {
    card?: boolean;
    component?: string;
    id: number;
    name: string;
    subTitle: string;
    avatar: string;
}
