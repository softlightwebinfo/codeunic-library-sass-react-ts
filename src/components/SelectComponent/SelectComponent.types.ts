import {IProp} from "../../Interfaces";

export interface ISelectComponentProps extends IProp {
    id: string;
    value?: string;
    options: ISelectComponentPropsOption[];

    onChange?(e: any): any;
}

export type ISelectComponentPropsOption = {
    value: string;
    label: string;
};
