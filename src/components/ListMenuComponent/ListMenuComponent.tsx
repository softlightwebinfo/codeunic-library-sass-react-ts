import * as React from "react";
import {IListMenuComponentProps} from "./ListMenuComponent.types";
import "./ListMenuComponent.scss";
import {BEM} from "../../libs";
import {useState} from "react";

export function ListMenuComponent(props: IListMenuComponentProps) {
    const bm = new BEM("ListMenu-component", {});
    const [active, setActive] = useState(props.active);
    bm.Append(props.className);
    const onClick = (index: number) => {
        setActive(index);
        props.onChange && props.onChange(index);
    };
    return (
        <ul
            style={props.style}
            className={bm.toString()}
        >
            {props.data.map((item, index) => (
                <li onClick={() => onClick(index)} className={bm.Modifier("item", "active", active == index)} key={index}>
                    {item.label}
                </li>
            ))}
        </ul>
    );
}
