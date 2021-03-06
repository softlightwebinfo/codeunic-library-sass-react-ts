import {IProp} from "../../Interfaces/IProp";
import {IDropdownDataComponent} from "../../components/DropdownComponent/DropdownComponent.types";

export interface IProfileWidgetProps extends IProp {
    onChange?(e: IDropdownDataComponent): void;

    name: string;
    category: string;
    avatar: string;
}
