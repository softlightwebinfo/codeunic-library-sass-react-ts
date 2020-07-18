import * as React from "react";
import {ITabComponentProps} from "./TabComponent.types";
import "./TabComponent.scss";
import {BEM} from "../../libs";
import {ListComponent} from "../..";
import {useState} from "react";

export function TabComponent(props: ITabComponentProps) {
    const [active, setActive] = useState(props.active || 0);
    const bm = new BEM("Tab-component", {});

    const onClick = (index) => {
        setActive(index);
    };
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <header className={bm.Children("header")}>
                <ListComponent className={bm.Children("list")} horizontal>
                    {props.tabs.map((item, index) => (
                        <li onClick={() => onClick(index)} key={index} className={(index !== active) ? bm.Children("tab") : bm.Modifier("tab", "active", true)}>
                            {item}
                        </li>
                    ))}
                </ListComponent>
            </header>
            <div className={bm.Children("content")}>
                {React.Children.map(props.children, (item, index) => {
                    if (index == active) return item;
                    return null;
                })}
            </div>
        </div>
    );
}
