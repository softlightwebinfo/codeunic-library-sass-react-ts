import {IProp} from "../../Interfaces/IProp";

export interface ITaskContainerComponentProps extends IProp {
    selected? :boolean;
    component?: string;
    id: number;
    check?: boolean;
    title: string;

    onClick?(e: ITaskContainerComponentProps): any;

    onDeleteTrack?(id: number): any;

    onAssignUser?(id: number): any;

    onChangeTitle?(id: number, textContent: string): any;

    onSelectedTask?(id: number): any;
}
