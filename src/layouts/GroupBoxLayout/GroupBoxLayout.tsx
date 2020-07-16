import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {IGroupBoxLayoutProps} from "./GroupBoxLayout.types";
import "./GroupBoxLayout.scss";
import {BEM} from "../..";

export function GroupBoxLayout(props: IGroupBoxLayoutProps) {
    const bem = new BEM("GroupBox-layout", {});
    const [height, setHeight] = useState(window.innerHeight);
    let ref = useRef(null);
    bem.Append(props.className);
    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
    return (
        <div ref={ref} className={bem.toString()} style={{
            ...props.style,
            minHeight: height,
        }}>
            <div className={bem.Children("main")}>
                <div className={bem.Children("wrapper")}>
                    <div className={bem.Children("view")}>
                        {props.view}
                    </div>
                    <div className={bem.Children("sidebar")}>
                        {props.sidebar}
                    </div>
                </div>
            </div>
        </div>
    );
}
