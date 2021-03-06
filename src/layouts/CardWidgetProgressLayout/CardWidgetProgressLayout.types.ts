import {IProp} from "../../Interfaces/IProp";
import {IColor} from "../../Interfaces/IColor";
import {ITitleSubtitle} from "../../Interfaces/ITitleSubtitle";
import {IChildren} from "../../Interfaces/IChildren";

export interface ICardWidgetProgressLayoutProps extends IProp, ITitleSubtitle {
    progressColor?: IColor;
    progress: number;
    value: number;
    number?: number;
    lastValue: number;
    dataTitle?: (props: ICardWidgetProgressLayoutProps) => IChildren;
    dataSubTitle?: (props: ICardWidgetProgressLayoutProps) => IChildren;
}
