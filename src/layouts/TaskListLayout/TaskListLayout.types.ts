import {IProp} from "../../Interfaces/IProp";
import {ITaskContainerComponentProps} from "../../components/TaskContainerComponent/TaskContainerComponent.types";

export interface ITaskListLayoutProps extends IProp {
    tasks?: ITaskContainerComponentProps[];
}
