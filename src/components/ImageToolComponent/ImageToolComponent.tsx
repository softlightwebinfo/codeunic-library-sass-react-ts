import * as React from "react";
import {IImageToolComponentProps} from "./ImageToolComponent.types";
import "./ImageToolComponent.scss";
import {BEM} from "../../libs";
import {useState} from "react";
import {PreloaderComponent} from "../..";

export function ImageToolComponent(props: IImageToolComponentProps) {
    const [loading, setLoading] = useState(true);
    const bm = new BEM("ImageTool-component", {
        loading: loading,
        hover: props.hover,
    });
    const onLoad = () => {
        setLoading(false);
    };
    return (
        <div
            onClick={props.onClick}
            className={bm.toString()}
        >
            <div className={"ImageTool-component__image"}>
                <PreloaderComponent/>
                <img onLoad={onLoad} className={"ImageTool-component__picture"} src={props.image} alt={props.caption}/>
            </div>
            {props.caption && (<div className={"ImageTool-component__caption"}>{props.caption}</div>)}
        </div>
    );
}
