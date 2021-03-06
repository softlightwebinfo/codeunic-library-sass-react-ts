import {IProp} from "../../Interfaces";
import {IChildren} from "../../Interfaces";

export interface IAuthFormComponentProps extends IProp {
    onSubmit?(e: any): void;

    component?: string;
    children: IChildren | IChildren[];

}
