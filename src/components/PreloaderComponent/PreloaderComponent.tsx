import * as React from "react";
import {IPreloaderComponentProps} from "./PreloaderComponent.types";
import "./PreloaderComponent.scss";
import {BEM} from "../../libs";

export function PreloaderComponent(props: IPreloaderComponentProps) {
    const bm = new BEM("Preloader-component", {});
    return (
        <div className={bm.toString()}/>
    );
}
