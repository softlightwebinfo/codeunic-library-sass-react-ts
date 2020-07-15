import * as React from "react";
import {ITableRowComponentProps} from "./TableRowComponent.types";
import "./TableRowComponent.scss";
import {BEM} from "../../libs";

export function TableRowComponent(props: ITableRowComponentProps) {
    const bm = new BEM("TableRow-component", {
        header: props.header,
    });
    bm.Append(props.className);
    const Content = ({children}) => (
        <tr
            style={props.style}
            className={bm.toString()}
        >
            {children}
        </tr>
    );
    if (props.header) {

        return (
            <thead>
            <Content>
                {React.Children.map(props.children, (child) => {
                    // @ts-ignore
                    return React.cloneElement(child, {
                        header: true
                    })
                })}
            </Content>
            </thead>
        );
    }
    if (props.footer) {
        return (
            <tfoot>
            <Content>
                {React.Children.map(props.children, (child) => {
                    // @ts-ignore
                    return React.cloneElement(child, {
                        header: true
                    })
                })}
            </Content>
            </tfoot>
        );
    }
    return <Content>{props.children}</Content>;
}

TableRowComponent.displayName = "TableRowComponent";
