import {IProp} from "../../Interfaces/IProp";
import {IOnChange} from "../../Interfaces/IOnChange";
import {ReactElement} from "react";

export interface IHeaderToolbarComponentProps extends IProp {
    title: string;
    search: IHeaderToolbarComponentPropsSearch;
    icons: ReactElement[];

    onClick(item: any, index: any): any;
}

export interface IHeaderToolbarComponentPropsSearch {
    value: string;
    placeholder: string;
    onChange: (e: IOnChange) => void;
}