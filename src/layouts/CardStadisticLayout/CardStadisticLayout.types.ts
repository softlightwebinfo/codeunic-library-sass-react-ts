import {IProp} from "../../Interfaces/IProp";
import {IStatBoxComponentProps} from "../../components/StatBoxComponent/StatBoxComponent.types";
import {IProgressComponentProps} from "../../components/ProgressComponent/ProgressComponent.types";
import {IItemDotLayoutProps} from "../ItemDotLayout/ItemDotLayout.types";

export interface ICardStadisticLayoutProps extends IProp, IItemDotLayoutProps {
    progress: IProgressComponentProps[];
    title: string;
    stadistics: IStatBoxComponentProps[];
}
