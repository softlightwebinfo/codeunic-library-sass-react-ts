import * as React from "react";
import {IInvoiceDetailsComponentProps} from "./InvoiceDetailsComponent.types";
import {BEM} from "../../libs";
import {ListComponent, TypographyComponent} from "../..";

export function InvoiceDetailsComponent(props: IInvoiceDetailsComponentProps) {
    const bm = new BEM("InvoiceDetails-component", {});
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <TypographyComponent className={bm.Children("title")} component={"h3"}>INVOICE #{props.invoiceNum}</TypographyComponent>
            <ListComponent component={"ul"} className={bm.Children("list")}>
                {props.data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ListComponent>
        </div>
    );
}
