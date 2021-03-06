import {IProp} from "../../Interfaces/IProp";
import {IDropdownDataComponent} from "../DropdownComponent/DropdownComponent.types";

export interface IDropdownMenuComponentProps extends IProp {
    data: IDropdownDataComponent[];
    open: boolean;

    onClick?(item: IDropdownDataComponent): any;
}
