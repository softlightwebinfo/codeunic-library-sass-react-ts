import {ISize} from "../../Interfaces/ISize";
import {IChildren} from "../../Interfaces/IChildren";

export interface IContainerComponentProps {
    maxWidth?: ISize;
    fixed?: boolean;
    disableGutters?: boolean;
    children: IChildren | IChildren[];
}
