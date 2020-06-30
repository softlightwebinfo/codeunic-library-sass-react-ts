import * as React from "react";
import {IInputFieldComponentProps} from "./InputFieldComponent.types";
import "./InputFieldComponent.scss";
import {BEM} from "../../libs";

export function InputFieldComponent(props: IInputFieldComponentProps) {
    const bm = new BEM("InputField-component", {});

    return (
        <div className={bm.toString()}>
            <input
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                type={props.type || "text"}
                style={props.style}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                className={"InputField-component__input"}
                required={props.required}
            />
        </div>
    );
}
