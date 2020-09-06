import { IChildren, IProp } from "../../Interfaces";

export interface ISectionBoxComponentProps extends IProp {
    header: ISectionBoxComponentPropsHeader;
    children?: IChildren | IChildren[];
}

export type ISectionBoxComponentPropsHeader = {
    center: ISectionBoxComponentPropsHeaderCenter;
    right: ISectionBoxComponentPropsHeaderPos;
    left: ISectionBoxComponentPropsHeaderPos;
};
export type ISectionBoxComponentPropsHeaderPos = {
    image: string;
    title: string;
}
export type ISectionBoxComponentPropsHeaderCenter = {
    title: string;
    description: string;
};