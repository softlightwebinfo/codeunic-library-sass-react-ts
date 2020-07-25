import * as React from "react";
import {IDropDownMenuWidgetProps} from "./DropDownMenuWidget.types";
import "./DropDownMenuWidget.scss";
import {BEM} from "../../libs";
import {ScrollbarComponent, TypographyComponent} from "../..";

export function DropDownMenuWidget(props: IDropDownMenuWidgetProps) {
    const bem = new BEM("DropDownMenu-widget", {
        open: props.open,
    });
    bem.Append(props.className);
    return (
        <div className={bem.toString()}>
            <header className={bem.Children("header")}>
                <TypographyComponent className={bem.Children("title")}>{props.title}</TypographyComponent>
            </header>
            <section className={bem.Children("content")}>
                <ScrollbarComponent>
                    {props.children}
                </ScrollbarComponent>
            </section>
            <footer className={bem.Children("footer")}>
                <TypographyComponent>{props.textFooter}</TypographyComponent>
            </footer>
        </div>
    );
}
