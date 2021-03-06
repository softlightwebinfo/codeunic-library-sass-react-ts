import {IProp} from "../../Interfaces/IProp";
import {ITitleSubtitle} from "../../Interfaces/ITitleSubtitle";

export interface IMessageAvatarComponentProps extends IProp, ITitleSubtitle {
    mini?: boolean;
    name: string;
    src?: string;
}
