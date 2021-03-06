import {IProp} from "../../Interfaces/IProp";
import {IChildren} from "../../Interfaces/IChildren";

export interface ITextNumberComponentProps extends IProp {
    number: number;
    data?: (props: ITextNumberComponentProps) => IChildren;
}
