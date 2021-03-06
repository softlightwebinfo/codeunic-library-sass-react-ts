import {IEventClick} from "../../Interfaces/IEventClick";

export interface IMenuItemComponentProps {
    gutters?: boolean;
    children: string;
    onClick: (event: IEventClick) => void;
    disabled?: boolean;
    selected?: boolean;
}
