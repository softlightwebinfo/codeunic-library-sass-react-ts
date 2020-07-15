import * as React from "react";
import {ITableComponentProps} from "./TableComponent.types";
import "./TableComponent.scss";
import {BEM} from "../../libs";

export function TableComponent(props: ITableComponentProps) {
    const bm = new BEM("Table-component", {});
    bm.Append(props.className);

    let header = [];
    let footer = [];
    let body = [];
    React.Children.forEach(props.children, (child, index) => {
        if (child.type.displayName == "TableRowComponent") {
            if (child.props.header) {
                header.push(child);
                return;
            } else if (child.props.footer) {
                footer.push(child);
                return;
            }
        }
        body.push(child);
        return;
    });
    return (
        <div className={"Table-component-responsive"}>
            <table
                style={props.style}
                className={bm.toString()}
            >
                {header}
                <tbody>
                {body}
                </tbody>
                {footer}
            </table>
        </div>
    );
}
