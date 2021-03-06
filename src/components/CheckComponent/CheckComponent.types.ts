import {IProp} from "../../Interfaces/IProp";
import {IOnClick} from "../../Interfaces/IOnClick";

export interface ICheckComponentProps extends IProp {
    check: boolean;
    onClick(e: IOnClick): any;

}
