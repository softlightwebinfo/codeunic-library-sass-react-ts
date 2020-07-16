import {IProp} from "../../Interfaces/IProp";
import {IOnClick} from "../../Interfaces/IOnClick";

export interface IChatFooterLayoutProps extends IProp {
    onClickSend?: (e: IOnClick) => void;
    onChange?: (e: any) => any;
    onClickAttach?: (e: IOnClick) => any;
}
