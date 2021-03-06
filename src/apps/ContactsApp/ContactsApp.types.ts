import {IProp} from "../../Interfaces/IProp";
import {IChildren} from "../../Interfaces/IChildren";
import {IContactContComponentProps} from "../../components/ContactContComponent/ContactContComponent.types";

export interface IContactsAppProps extends IProp {
    contacts: IContactContComponentProps[];
}

export interface IContactsAppState {
    contacts: IContactContComponentProps[];

    goTo(item: any): void;
}


export interface IContactsAppPropsContent extends IProp {
    children: IChildren | IChildren[];
}
