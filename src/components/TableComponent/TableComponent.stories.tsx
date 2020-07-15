import React from "react";
import {TableComponent} from './TableComponent';
import {TableRowComponent} from "./TableRowComponent";
import {TableColComponent} from "./TableColComponent";
import {BoxxComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|Table"
};

export const Default = () => (
    <BoxxComponent style={{backgroundColor: "white"}}>
        <TableComponent>
            <TableRowComponent header>
                <TableColComponent>Invoice ID</TableColComponent>
                <TableColComponent>Client</TableColComponent>
                <TableColComponent>Due Date</TableColComponent>
                <TableColComponent>Total</TableColComponent>
                <TableColComponent>Status</TableColComponent>
            </TableRowComponent>
            {[...new Array(30)].map((item, index) => (
                <TableRowComponent key={index}>
                    <TableColComponent>#INV-0001</TableColComponent>
                    <TableColComponent>Global Technologies</TableColComponent>
                    <TableColComponent>11 Mar 2019</TableColComponent>
                    <TableColComponent>$380</TableColComponent>
                    <TableColComponent>Partially Paid</TableColComponent>
                </TableRowComponent>
            ))}
            <TableRowComponent footer>
                <TableColComponent>Invoice ID</TableColComponent>
                <TableColComponent>Client</TableColComponent>
                <TableColComponent>Due Date</TableColComponent>
                <TableColComponent>Total</TableColComponent>
                <TableColComponent>Status</TableColComponent>
            </TableRowComponent>
        </TableComponent>
    </BoxxComponent>
);
