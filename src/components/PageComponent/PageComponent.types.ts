import {IChildren, IProp} from "../../Interfaces";

export interface IPageComponentProps extends IProp {
    children: IChildren | IChildren[];

}
