import * as React from "react";
import {IPageComponentProps} from "./PageComponent.types";
import "./PageComponent.scss";
import {BEM} from "../../libs";
import {useEffect} from "react";

export function PageComponent(props: IPageComponentProps) {
    const bm = new BEM("Page-component", {});
    bm.Append(props.className);
    useEffect(() => {
        let classname = "Page-body-component";
        if (typeof document != "undefined") {
            document.body.classList.add(classname);
        }
        return () => {
            document.body.classList.remove(classname)
        }
    });
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            {props.children}
        </div>
    );
}
