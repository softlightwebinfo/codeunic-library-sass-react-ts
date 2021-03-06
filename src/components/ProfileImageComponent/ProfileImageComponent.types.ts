import {IProp} from "../../Interfaces/IProp";
import {ITitleSubtitle} from "../../Interfaces/ITitleSubtitle";
import {IOnClick} from "../../Interfaces/IOnClick";

export interface IProfileImageComponentProps extends IProp, ITitleSubtitle {
    onClick?: (e: IOnClick) => void;
    avatar: string;
    changeText?: string;
}
