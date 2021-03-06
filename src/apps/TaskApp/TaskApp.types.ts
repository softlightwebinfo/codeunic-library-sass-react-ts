import {IProp} from "../../Interfaces/IProp";
import {IDropdownDataComponent} from "../../components/DropdownComponent/DropdownComponent.types";
import {ITaskContainerComponentProps} from "../../components/TaskContainerComponent/TaskContainerComponent.types";
import {IAvatarComponentProps} from "../../components/AvatarComponent/AvatarComponent.types";
import {ITaskInfoLineComponentProps} from "../../components/TaskInfoLineComponent/TaskInfoLineComponent.types";
import {IChatBubbleComponentProps} from "../../components/ChatBubbleComponent/ChatBubbleComponent.types";

export interface ITaskAppProps extends IProp {
    button?: ITaskAppPropsButton;
    dropdownFilter?: IDropdownDataComponent[];
    dropdownTask?: IDropdownDataComponent[];
    labels?: ITaskAppPropsLabels;
    tasks: ITaskAppTasks[];

    onAssignUser(id: number, callback: () => any): any;

    onDeleteTrack(id: number, callback: () => any): any;

    onChangeTitle(id: number, callback: () => any): any;

    onChangeDescription(id: number, value: string, callback: () => any): any;
}

export interface ITaskAppState {
    filter?: number;
    openAddTask?: boolean;
    tasks?: ITaskAppTasks[];
    taskSelected?: number;

    toggleAddTask?(): any;

    onChangeFilter?(e: IDropdownDataComponent): void;

    onChangeSetting?(e: IDropdownDataComponent): void;

    toggleCheckTask?(id: number): void;

    deleteTrack?(id: number): void;

    assignUser?(id: number): void;

    onChangeTitle?(id: number, textContent: string): void;

    selectedTask?(id: number): void;

    openFollower?(): void;

    toggleMaskComplete?(): void;

    getSelected?(): ITaskAppTasks;

    onChangeDescription?(taskSelected: number, value: string): void;
}

export type ITaskAppPropsButton = {
    maskComplete?: string;
    addTask?: string;
};
export type ITaskAppPropsLabels = {
    followers?: string;
    placeholder?: string;
};
export type ITaskAppTasks = ITaskContainerComponentProps & {
    followers: IAvatarComponentProps[];
    date: string;
    description: string;
    info: ITaskInfoLineComponentProps[];
    comments: IChatBubbleComponentProps[],
}
