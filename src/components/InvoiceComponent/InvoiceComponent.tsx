import * as React from "react";
import {IInvoiceComponentProps} from "./InvoiceComponent.types";
import "./InvoiceComponent.scss";
import {BEM} from "../../libs";
import {CardComponent, CardContentComponent} from "../CardComponent";
import {GridComponent, GroupTitleComponent, ListComponent, ListInfoComponent, TableColComponent, TableComponent, TableRowComponent, TypographyComponent} from "../..";
import {InvoiceDetailsComponent} from "./InvoiceDetailsComponent";
import {TableLayout} from "../../layouts/TableLayout/TableLayout";
import {ETableColumnType} from "../../Interfaces/ITable";

export function InvoiceComponent(props: IInvoiceComponentProps) {
    const bm = new BEM("Invoice-component", {});
    bm.Append(props.className);
    const getSubtotal = () => {
        return props.rows.reduce((previousValue, currentValue) => {
            previousValue += currentValue.unit * currentValue.quantity;
            return previousValue;
        }, 0)
    };
    return (
        <CardComponent
            style={props.style}
            className={bm.toString()}
        >
            <CardContentComponent>
                <GridComponent container>
                    <GridComponent item xs={12} sm={6}>
                        <img className={bm.Children("logo")} src={props.logo} alt={props.business}/>
                        <ListComponent className={bm.Children("list")}>
                            <li>{props.business}</li>
                            <li>{props.address}</li>
                            <li>{props.postalCode}</li>
                        </ListComponent>
                    </GridComponent>
                    <GridComponent item xs={12} sm={6}>
                        <InvoiceDetailsComponent
                            invoiceNum={props.invoiceNum}
                            data={props.details}
                        />
                    </GridComponent>
                </GridComponent>
                <GridComponent container>
                    <GridComponent xs={12} sm={6} lg={7} xl={8} item>
                        <TypographyComponent component={"h5"}>Invoice to:</TypographyComponent>
                        <ListComponent className={bm.Children("invoice-to")}>
                            {props.invoiceTo.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ListComponent>
                    </GridComponent>
                    <GridComponent xs={12} sm={6} lg={5} xl={4} item>
                        <TypographyComponent component={"h5"}>Payment Details:</TypographyComponent>
                        <ListInfoComponent className={bm.Children("payment-details")} data={props.paymentDetails}/>
                    </GridComponent>
                </GridComponent>
                <TableLayout
                    className={bm.Children("table")}
                    columns={[
                        {key: "key", type: ETableColumnType.STRING, data: "#"},
                        {key: "item", type: ETableColumnType.STRING, data: "ITEM"},
                        {key: "description", type: ETableColumnType.STRING, data: "DESCRIPTION"},
                        {key: "unit", type: ETableColumnType.STRING, data: "UNIT COST", align: "right"},
                        {key: "quantity", type: ETableColumnType.STRING, data: "QUANTITY", align: "right"},
                        {key: "total", type: ETableColumnType.STRING, data: "TOTAL", align: "right"},
                    ]}
                    rows={props.rows.map((item) => ({
                        ...item,
                        total: item.unit * item.quantity,
                    }))}
                    data={props1 => ({
                        ...props1,
                        total: `${props1.total} €`,
                        unit: `${props1.unit} €`,
                    })}
                />
                <GridComponent container className={bm.Children("grid")}>
                    <GridComponent item xs={12} sm={7}/>
                    <GridComponent item xs={12} sm={5}>
                        <TableComponent>
                            <TableRowComponent>
                                <TableColComponent><b>Subtotal:</b></TableColComponent>
                                <TableColComponent align={"right"}>{getSubtotal().toFixed(2).toString() + ' €'}</TableColComponent>
                            </TableRowComponent>
                            <TableRowComponent>
                                <TableColComponent><b>IVA: (21%)</b></TableColComponent>
                                <TableColComponent align={"right"}>{(getSubtotal() * 21 / 100).toFixed(2) + ' €'}</TableColComponent>
                            </TableRowComponent>
                            <TableRowComponent>
                                <TableColComponent><b>Subtotal:</b></TableColComponent>
                                <TableColComponent align={"right"}>{(getSubtotal() + (getSubtotal() * 21 / 100)).toFixed(2) + ' €'}</TableColComponent>
                            </TableRowComponent>
                        </TableComponent>
                    </GridComponent>
                </GridComponent>
                <GroupTitleComponent title={"Other Information"} content={<TypographyComponent>{props.otherInformation}</TypographyComponent>}/>
            </CardContentComponent>
        </CardComponent>
    );
}
