import {IProp} from "../../Interfaces/IProp";
import {IInvoiceComponentProps} from "../../components/InvoiceComponent/InvoiceComponent.types";

export interface IInvoiceLayoutProps extends IProp {
    invoice: IInvoiceComponentProps;

    onClickButton(e: any, index: number): any;
}
