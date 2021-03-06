import {IProp} from "../../Interfaces/IProp";
import {ITitleSubtitle} from "../../Interfaces/ITitleSubtitle";
import {IOnChange} from "../../Interfaces/IOnChange";
import {IOnClick} from "../../Interfaces/IOnClick";

export interface IChatHeaderLayoutProps extends IProp, ITitleSubtitle {
    onClickSetting?: (e: IOnClick) => void;
    onClickCamera?: (e: IOnClick) => void;
    onClickPhone?: (e: IOnClick) => void;
    searchPlaceholder?: string;
    searchValue?: string;
    onSearch?: (e: IOnChange) => void;
    name: string;
    src?: string;
}
