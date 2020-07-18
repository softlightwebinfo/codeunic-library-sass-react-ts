import * as React from "react";
import {IBreadcrumbComponentProps} from "./BreadcrumbComponent.types";
import "./BreadcrumbComponent.scss";
import {BEM} from "../../libs";

export function BreadcrumbComponent(props: IBreadcrumbComponentProps) {
    const bm = new BEM("Breadcrumb-component", {});
    bm.Append(props.className);
    return (
        <ul
            style={props.style}
            className={bm.toString()}
        >
            {props.data.map((item, index) => (
                <li key={index} className={bm.Modifier("item", "active", props.data.length - 1 == index)}>
                    <a href={item.route}>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}
