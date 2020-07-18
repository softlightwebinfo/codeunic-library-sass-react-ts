import * as React from "react";
import {IProgressLabelComponentProps} from "./ProgressLabelComponent.types";
import "./ProgressLabelComponent.scss";
import {BEM} from "../../libs";

export function ProgressLabelComponent(props: IProgressLabelComponentProps) {
    const bm = new BEM("ProgressLabel-component", {});
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            {React.Children.map(props.children, (child: any, index) => {
                return (
                    <div key={index} className={bm.Children("item")}>
                        <div className={bm.Children("row")}>
                            <div>{child.props.label || ""}</div>
                            <div>{child.props.value}%</div>
                        </div>
                        {child}
                    </div>
                )
            })}
        </div>
    );
}
