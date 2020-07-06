import * as React from "react";
import {IDelimiterComponentProps} from "./DelimiterComponent.types";
import "./DelimiterComponent.scss";
import {BEM} from "../../libs";

export function DelimiterComponent(props: IDelimiterComponentProps) {
    const bm = new BEM("Delimiter-component", {

    });
    return (
        <div
            className={bm.toString()}
        >

        </div>
    );
}
