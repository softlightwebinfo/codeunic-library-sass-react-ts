import * as React from "react";
import {ICardComponentProps} from "./CardComponent.types";
import "./CardComponent.scss";
import {BEM} from "../../libs";
import PropTypes from 'prop-types';

export function CardComponent(props: ICardComponentProps) {
    const bm = new BEM("Card-component", {
        rounded: props.rounded != undefined ? props.rounded : true,
        variant: props.variant,
    });
    bm.Append(props.className);
    return (
        <div
            onClick={props.onClick}
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
