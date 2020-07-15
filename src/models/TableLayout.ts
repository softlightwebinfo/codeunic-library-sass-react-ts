import {IMessageAvatarComponentProps} from "../components/MessageAvatarComponent/MessageAvatarComponent.types";
import {IStyle} from "../Interfaces/IStyle";

export class TableMessageAvatar implements IMessageAvatarComponentProps {
    className: string;
    name: string;
    style: IStyle;
    subTitle: string;
    title: string;

    constructor(name: string, title: string, subTitle: string) {
        this.name = name;
        this.title = title;
        this.subTitle = subTitle;
    }
}
