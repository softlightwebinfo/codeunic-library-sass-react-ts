import * as React from "react";
import {ITitleRowComponentProps} from "./TitleRowComponent.types";
import "./TitleRowComponent.scss";
import {BEM} from "../../libs";
import {BreadcrumbComponent, ButtonComponent, IconComponent, TypographyComponent} from "../..";

export function TitleRowComponent(props: ITitleRowComponentProps) {
    const bm = new BEM("TitleRow-component", {});
    bm.Append(props.className);

    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <div className={bm.Children("left")}>
                <TypographyComponent component={"h3"} variant={"h5"} className={bm.Children("title")}>{props.title}</TypographyComponent>
                <BreadcrumbComponent className={bm.Children("breadcrumb")} data={props.breadcrumb}/>
            </div>
            <div className={bm.Children("right")}>
                {props.extra}
                {props.button && (
                    <ButtonComponent rounded theme={"orange"} className={bm.Children("button")} onClick={props.button.onClick}>
                        <IconComponent icon={props.button.icon}/>
                        {props.button.label}
                    </ButtonComponent>
                )}
            </div>
        </div>
    );
}
