import {IProp} from "../../Interfaces/IProp";
import {IColor} from "../../Interfaces/IColor";
import {ITitleSubtitle} from "../../Interfaces/ITitleSubtitle";

export interface IItemDotLayoutProps extends IProp {
    data: IItemDotData[];

}

export interface IItemDotData extends ITitleSubtitle, IProp {
    color: IColor;
}
