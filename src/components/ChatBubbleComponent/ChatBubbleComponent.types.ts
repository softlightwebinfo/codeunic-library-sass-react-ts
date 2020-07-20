import {IProp} from "../../Interfaces/IProp";

export type IChatBubbleComponentProps = IProp & {
    id: number;
    avatar: string;
    name: string;
    date: string;
    description: string;
    files: IChatBubbleComponentPropsFile[],
    images: string[];
}
export type IChatBubbleComponentPropsFile = {
    name: string;
};
