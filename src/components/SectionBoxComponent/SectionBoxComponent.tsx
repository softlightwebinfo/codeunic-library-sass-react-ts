import * as React from "react";
import { ISectionBoxComponentProps } from "./SectionBoxComponent.types";
import "./SectionBoxComponent.scss";
import { BEM } from "../../libs";
import { TypographyComponent } from "../..";

export function SectionBoxComponent(props: ISectionBoxComponentProps) {
    const bm = new BEM("SectionBox-component", {
        center: !props.children
    });
    bm.Append(props.className);
    return (
        <section
            style={props.style}
            className={bm.toString()}
        >
            <section className={bm.Children("header")}>
                <section className={bm.Children("left")}>
                    <img src={props.header.left.image} alt={props.header.left.title} title={props.header.left.title}/>
                </section>
                <section className={bm.Children("center")}>
                    <div className={bm.Children("text")}>
                        <TypographyComponent component={"h2"}
                                             variant={"h4"}>{props.header.center.title}</TypographyComponent>
                        <TypographyComponent variant={"body2"}>{props.header.center.description}</TypographyComponent>
                    </div>
                </section>
                <section className={bm.Children("right")}>
                    <img src={props.header.right.image} alt={props.header.right.title}
                         title={props.header.right.title}/>
                </section>
            </section>
            {props.children && (
                <section className={bm.Children("content")}>
                    {props.children}
                </section>
            )}
        </section>
    );
}
