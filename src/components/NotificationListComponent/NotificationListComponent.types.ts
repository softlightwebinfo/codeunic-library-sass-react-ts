import {IProp} from "../../Interfaces/IProp";
import {INotificationComponentProps} from "../NotificationComponent/NotificationComponent.types";

export interface INotificationListComponentProps extends IProp {
    data: INotificationComponentProps[];
}
