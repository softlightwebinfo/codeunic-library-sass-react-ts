import {IProp} from "../../Interfaces/IProp";
import {IListInfoComponentPropsData} from "../ListInfoComponent/ListInfoComponent.types";

export interface IInvoiceComponentProps extends IProp {
    otherInformation: string;
    rows: IInvoiceComponentPropsRow[];
    paymentDetails: IListInfoComponentPropsData[];
    invoiceTo: string[];
    details: string[];
    invoiceNum: string;
    address: string;
    logo: string;
    business: string;
    postalCode: string;
}

export type IInvoiceComponentPropsRow = {
    key: number;
    item: string;
    description: string;
    unit: number;
    quantity: number;
};
