import * as React from "react";
import {ICardWidgetProgressLayoutProps} from "./CardWidgetProgressLayout.types";
import "./CardWidgetProgressLayout.scss";
import {BEM, CardComponent, CardContentComponent, ProgressComponent, TextNumberComponent, TypographyComponent} from "../..";

export function CardWidgetProgressLayout(props: ICardWidgetProgressLayoutProps) {
    const bem = new BEM("CardWidgetProgress-layout", {});
    bem.Append(props.className);
    const calculateNumber = () => (((props.value - props.lastValue) / props.lastValue) * 100).toFixed(2);
    const value = props.number != undefined ? props.number : calculateNumber();
    return (
        <CardComponent className={bem.toString()} style={props.style}>
            <CardContentComponent>
                <div className={bem.Children("top")}>
                    <TypographyComponent variant={"body1"} component={"span"}>
                        {(props.dataTitle && props.dataTitle(props)) || props.title}
                    </TypographyComponent>
                    <TextNumberComponent number={Number(value)} data={(props) => `${props.number}%`}/>
                </div>
                <TypographyComponent className={bem.Children("value")} component={"h3"} variant={"h4"}>{props.value.toString()}</TypographyComponent>
                <ProgressComponent color={props.progressColor} value={props.progress}/>
                <p className={bem.Children("last")}>
                    <TypographyComponent variant={"body2"} component={"span"}>
                        {(props.dataSubTitle && props.dataSubTitle(props)) || props.subTitle}
                    </TypographyComponent>
                    <TypographyComponent component={"span"} variant={"body2"} color={"gray"}>{props.lastValue.toString()}</TypographyComponent>
                </p>
            </CardContentComponent>
        </CardComponent>
    );
}
