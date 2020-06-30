import * as React from "react";
import {ICardComponentProps} from "./CardComponent.types";
import "./CardComponent.scss";
import {BEM} from "../../libs";
import PropTypes from 'prop-types';
import {CSSProperties} from "react";

export function CardComponent(props: ICardComponentProps) {
    const bm = new BEM("Card-component", {
        rounded: props.rounded != undefined ? props.rounded : true,
        variant: props.variant,
    });
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            {props.children}
        </div>
    );
}

CardComponent.propTypes = {
    rounded: PropTypes.bool,
};
