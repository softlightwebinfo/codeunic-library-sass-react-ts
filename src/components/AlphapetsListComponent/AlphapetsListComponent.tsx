import * as React from "react";
import {IAlphapetsListComponentProps} from "./AlphapetsListComponent.types";
import "./AlphapetsListComponent.scss";
import {BEM} from "../../libs";
import {ScrollbarComponent} from "../ScrollbarComponent";
import alphabet from "../../utils/alphabet";
import useContactsAppContext from "../../context/useContactsAppContext";

let alphabetDir: string[] = alphabet();

export function AlphapetsListComponent(props: IAlphapetsListComponentProps) {
    const bm = new BEM("AlphapetsList-component", {});
    bm.Append(props.className);
    const use = useContactsAppContext();
    const onClick = (item) => {
        if (use) {
            use.goTo(item);
        }
        props.onClick && props.onClick(item);
    };

    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <ScrollbarComponent className={bm.Children("scroll")}>
                {alphabetDir.map((item) => (
                    <a onClick={() => onClick(item)} className={bm.Children("item")} key={item}>{item}</a>
                ))}
            </ScrollbarComponent>
        </div>
    );
}
