import * as React from "react";
import {IProgressBarComponentProps, IProgressComponentProps} from "./ProgressComponent.types";
import "./ProgressComponent.scss";
import {BEM} from "../../libs";
import {TypographyComponent} from "../..";

export function ProgressBarComponent(props: IProgressBarComponentProps) {
    const bm = new BEM("Progress-component", {});
    const {color = "primary"} = props;
    return (
        <div style={{width: `${props.value}%`}} className={[bm.Children("bar", `h-bg--${color}`), props.className].join(" ")}>
            {props.isMultiple ? (<TypographyComponent component={"span"} variant={"caption"}>{`${props.value}%`}</TypographyComponent>) : null}
        </div>
    )
}

export function ProgressComponent(props: IProgressComponentProps) {
    const bm = new BEM("Progress-component", {
        multiple: !!props.data,
    });
    const {data = []} = props;
    console.log(props);
    const getData = () => {
        if (data == undefined) {
            return <ProgressBarComponent value={props.value} color={props.color}/>;
        }
        return data.map((item, index) => (
            <ProgressBarComponent isMultiple className={bm.Children("is-multiple")} key={index} value={item.value} color={item.color}/>
        ))
    };

    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            {getData()}
        </div>
    );
}
