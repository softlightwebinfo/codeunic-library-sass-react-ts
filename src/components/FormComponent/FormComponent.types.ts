import {IChildren, IProp} from "../../Interfaces";

export interface IFormComponentProps extends IProp {
    children?: IChildren | IChildren[];
    id?: string;
    card?: boolean;

    onSubmit?(e: any): any;
}
