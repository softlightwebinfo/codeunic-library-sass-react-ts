import {IProp} from "../../Interfaces/IProp";
import {ReactElement} from "react";
import {ITitleSubtitle} from "../../Interfaces/ITitleSubtitle";
import {IOnClick} from "../../Interfaces/IOnClick";

export interface ITaskHeaderComponentProps extends IProp, ITitleSubtitle {
    icon: ReactElement;

    onClick?(e: IOnClick): any;

    onDelete?(e: IOnClick): any;
}
