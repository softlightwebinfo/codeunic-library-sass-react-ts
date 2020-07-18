import * as React from "react";
import {IDropdownMenuComponentProps} from "./DropdownMenuComponent.types";
import "./DropdownMenuComponent.scss";
import {BEM} from "../../libs";

export function DropdownMenuComponent(props: IDropdownMenuComponentProps) {
    const bm = new BEM("DropdownMenu-component", {
        open: props.open,
    });
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            {props.data.map((item, index) => (
                <a key={index} onClick={e => props.onClick && props.onClick(item)} className={bm.Children("item")}>
                    {
                        // @ts-ignore
                        React.cloneElement(item.icon, {
                            className: bm.Children("icon"),
                        })
                    }
                    {item.label}
                </a>
            ))}
        </div>
    );
}
