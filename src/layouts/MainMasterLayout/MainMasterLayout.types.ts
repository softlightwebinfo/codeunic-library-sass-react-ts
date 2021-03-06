import {IProp} from "../../Interfaces/IProp";
import {IGroupWindowLayoutProps} from "../GroupWindowLayout/GroupWindowLayout.types";

export interface IMainMasterLayoutProps extends IProp {
    left: IGroupWindowLayoutProps;
    right: IGroupWindowLayoutProps;
}
