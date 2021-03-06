import {IProp} from "../../Interfaces/IProp";
import {IOnClick} from "../../Interfaces/IOnClick";

export interface IChatFooterLayoutProps extends IProp {
    placeholder? : string;
    onClickSend?: (e: IOnClick) => void;
    onChange?: (e: any) => any;
    onClickAttach?: (e: IOnClick) => any;
}
