import {IProp} from "../../Interfaces/IProp";
import {ITitleSubtitle} from "../../Interfaces/ITitleSubtitle";

export interface IMessageAvatarComponentProps extends IProp, ITitleSubtitle {
    name: string;
    src?: string;
}
