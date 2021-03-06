import {IOnClick} from "../../Interfaces/IOnClick";

export interface IImageToolComponentProps {
    loading?: boolean;
    hover?: boolean;
    onClick: (e: IOnClick) => void;
    image: string;
    caption?: string;
}
