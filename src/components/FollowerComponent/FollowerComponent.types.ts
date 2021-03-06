import {IProp} from "../../Interfaces/IProp";
import {IAvatarComponentProps} from "../AvatarComponent/AvatarComponent.types";
import {IOnClick} from "../../Interfaces/IOnClick";

export interface IFollowerComponentProps extends IProp {
    onClick(event: IOnClick): any;

    avatars: IAvatarComponentProps[];
    label: string;
}
