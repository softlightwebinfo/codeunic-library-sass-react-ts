import * as React from "react";
import {IFlexGrowComponentProps} from "./FlexGrowComponent.types";
import "./FlexGrowComponent.scss";
import {BEM} from "../../libs";

export function FlexGrowComponent(props: IFlexGrowComponentProps) {
    const bm = new BEM("FlexGrow-component", {

    });
    return (
        <div
            className={bm.toString()}
        >

        </div>
    );
}
