import {IProp} from "../../Interfaces/IProp";

export interface IChatCallComponentProps extends IProp {
    icon: string;
    name: string;
    message: string;
    date: string;
    avatar: string;
}
