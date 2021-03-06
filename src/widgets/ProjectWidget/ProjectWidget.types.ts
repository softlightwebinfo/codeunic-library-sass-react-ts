import {IProp} from "../../Interfaces/IProp";
import {IGroupSmallComponentPropsData} from "../../components/GroupSmallComponent/GroupSmallComponent.types";
import {IGroupTitleComponentProps} from "../../components/GroupTitleComponent/GroupTitleComponent.types";
import {IDropdownDataComponent} from "../../components/DropdownComponent/DropdownComponent.types";

export interface IProjectWidgetProps extends IProp {
    onChange?(e: IDropdownDataComponent): void;

    progressLabel: string;
    progress: number;
    group: IGroupTitleComponentProps[];
    description: string;
    title: string;
    subTitleData: IGroupSmallComponentPropsData[];
}
