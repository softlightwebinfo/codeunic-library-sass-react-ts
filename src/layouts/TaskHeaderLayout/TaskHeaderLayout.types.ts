import {IProp} from "../../Interfaces/IProp";
import {ITaskHeaderComponentProps} from "../../components/TaskHeaderComponent/TaskHeaderComponent.types";

export interface ITaskHeaderLayoutProps extends IProp {
    tasks: ITaskHeaderComponentProps[];


    onClick(item: ITaskHeaderComponentProps): any;

    onDelete(item: ITaskHeaderComponentProps): any;
}
