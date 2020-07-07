import {IOnClick} from "../../Interfaces/IOnClick";

export interface IImageToolComponentProps {
    hover?: boolean;
    onClick: (e: IOnClick) => void;
    image: string;
    caption?: string;
}
