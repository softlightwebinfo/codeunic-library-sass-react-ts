import {IChildren} from "../../Interfaces/IChildren";
import {IStyle} from "../../Interfaces/IStyle";
import {TOnline} from "../../models";

export interface IAvatarComponentProps {
    big?: boolean;
    user?: boolean;
    style?: IStyle;
    children: IChildren;
    className?: string;
    mini?: boolean;
    src?: string;
    status?: TOnline;
}
