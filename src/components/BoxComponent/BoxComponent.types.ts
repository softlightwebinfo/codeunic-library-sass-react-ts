import { IChildren, IProp } from "../../Interfaces";

export interface IBoxComponentProps extends IProp {
    children?: IChildren;
    isFull?: boolean;
    responsive?: boolean;
    title: string;
    description: string;
    image: string;
    isRow?: boolean;
}
