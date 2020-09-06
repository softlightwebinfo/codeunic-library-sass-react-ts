import * as React from "react";
import { ICardBoxComponentProps } from "./CardBoxComponent.types";
import "./CardBoxComponent.scss";
import { BEM } from "../../libs";
import PropTypes from 'prop-types';
import { TypographyComponent } from "../..";

export function CardBoxComponent(props: ICardBoxComponentProps) {
    const bm = new BEM("CardBox-component", {});
    bm.Append(props.className);
    return (
        <section
            style={props.style}
            className={bm.toString()}
        >
            <section className={bm.Children("left")}>
                <section className={bm.Children("title")}>
                    <TypographyComponent component={"h2"} variant={"h4"}>{props.title}</TypographyComponent>
                    <TypographyComponent component={"p"}>{props.description}</TypographyComponent>
                </section>
                <img src={props.image} alt={props.title}/>
                <section className={bm.Children("footer")}>
                    <TypographyComponent>{props.footer}</TypographyComponent>
                </section>
            </section>
            {props.children && (
                <section className={bm.Children("right")}>
                    {props.children}
                </section>
            )}
        </section>
    );
}

CardBoxComponent.propTypes = {
    rounded: PropTypes.bool,
    title: PropTypes.string,
    // children: PropTypes.element,
    description: PropTypes.string,
};
