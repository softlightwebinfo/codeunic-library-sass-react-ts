import * as React from "react";
import {IInvoiceLayoutProps} from "./InvoiceLayout.types";
import "./InvoiceLayout.scss";
import {BEM, ButtonComponent, ButtonGroupComponent, InvoiceComponent, TitleRowComponent} from "../..";

export function InvoiceLayout(props: IInvoiceLayoutProps) {
    const bem = new BEM("Invoice-layout", {});
    bem.Append(props.className);
    return (
        <div style={props.style} className={bem.toString()}>
            <TitleRowComponent
                className={bem.Children("titleRow")}
                breadcrumb={[
                    {label: "Dashboard", route: "/"},
                    {label: "Invoice"},
                ]}
                title={"Invoice"}
                extra={(
                    <>
                        <ButtonGroupComponent onClick={props.onClickButton}>
                            <ButtonComponent>CSV</ButtonComponent>
                            <ButtonComponent>PDF</ButtonComponent>
                            <ButtonComponent>PRINT</ButtonComponent>
                        </ButtonGroupComponent>
                    </>
                )}
            />
            <InvoiceComponent
                invoiceNum={props.invoice.invoiceNum}
                details={props.invoice.details}
                address={props.invoice.address}
                business={props.invoice.business}
                logo={props.invoice.logo}
                postalCode={props.invoice.postalCode}
                invoiceTo={props.invoice.invoiceTo}
                paymentDetails={props.invoice.paymentDetails}
                rows={props.invoice.rows}
                otherInformation={props.invoice.otherInformation}
            />
        </div>
    );
}
