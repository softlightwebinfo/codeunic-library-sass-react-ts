import * as React from "react";
import { IBoxComponentProps } from "./BoxComponent.types";
import "./BoxComponent.scss";
import { BEM } from "../../libs";
import { TypographyComponent } from "../..";

export function BoxComponent(props: IBoxComponentProps) {
    const {responsive = true} = props;
    const bm = new BEM("Box-component", {
        isRow: props.isRow,
        isFull: props.isFull,
        responsive: responsive,
    });
    bm.Append(props.className);
    return (
        <article
            style={props.style}
            className={bm.toString()}
        >
            <section>
                <img src={props.image} alt={props.title} title={props.title}/>
                <div>
                    <TypographyComponent component={"h5"} variant={"h6"}>{props.title}</TypographyComponent>
                    <TypographyComponent variant={"body2"}>{props.description}</TypographyComponent>
                </div>
                {props.children}
            </section>
        </article>
    );
}
