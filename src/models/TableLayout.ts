import {IMessageAvatarComponentProps} from "../components/MessageAvatarComponent/MessageAvatarComponent.types";
import {IStyle} from "../Interfaces/IStyle";
import {IGroupSmallComponentProps, IGroupSmallComponentPropsData} from "../components/GroupSmallComponent/GroupSmallComponent.types";
import {IProgressComponentProps} from "../components/ProgressComponent/ProgressComponent.types";
import {IColor} from "../Interfaces/IColor";

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

export class TableGroupSmall implements IGroupSmallComponentProps {
    className: string;
    data: IGroupSmallComponentPropsData[];
    name: string;
    style: IStyle;

    constructor(name: string, data: IGroupSmallComponentPropsData[] = []) {
        this.name = name;
        this.data = data;
    }

}

export class TableProgress implements IProgressComponentProps {
    className: string;
    color: IColor;
    data: IProgressComponentProps[];
    style: IStyle;
    value: number;

    constructor(value: number, color: IColor) {
        this.value = value;
        this.color = color;
    }

}
