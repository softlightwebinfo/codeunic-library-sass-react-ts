import { IChildren, IProp } from "../../Interfaces";

export interface ICardBoxComponentProps extends IProp {
    children?: IChildren;
    footer: string;
    image: string;
    description: string;
    title: string;
}