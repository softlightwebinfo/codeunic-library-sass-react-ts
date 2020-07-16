import {IChildren} from "../../Interfaces/IChildren";
import {IStyle} from "../../Interfaces/IStyle";
import {TOnline} from "../../models";

export interface IAvatarComponentProps {
    style?: IStyle;
    children: IChildren;
    className?: string;
    mini?: boolean;
    src?: string;
    status?: TOnline;
}
