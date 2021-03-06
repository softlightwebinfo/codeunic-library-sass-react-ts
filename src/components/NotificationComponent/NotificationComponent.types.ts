import {IProp} from "../../Interfaces/IProp";
import {IOnClick} from "../../Interfaces/IOnClick";

export interface INotificationComponentProps extends IProp {
    onClick?(e: IOnClick): any;

    component?: string;
    date: string;
    description: string;
    name: string;
    avatar: string;
}
