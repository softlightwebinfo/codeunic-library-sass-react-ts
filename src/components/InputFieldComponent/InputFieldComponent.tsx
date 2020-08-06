import * as React from "react";
import {IInputFieldComponentProps} from "./InputFieldComponent.types";
import "./InputFieldComponent.scss";
import {BEM} from "../../libs";

export function InputFieldComponent(props: IInputFieldComponentProps) {
    const bm = new BEM("InputField-component", {});
    bm.Append(props.className);
    const Component = props.multiline ? "textarea" : "input";
    return (
        <div className={bm.toString()}>
            <Component
                id={props.id}
                value={props.value}
                // @ts-ignore
                onChange={props.onChange}
                placeholder={props.placeholder}
                type={props.type || "text"}
                style={props.style}
                // @ts-ignore
                onFocus={props.onFocus}
                // @ts-ignore
                onBlur={props.onBlur}
                className={"InputField-component__input"}
                required={props.required}
                // @ts-ignore
                autoComplete={props.autoComplete}
                autoFocus={props.autoFocus}
            />
        </div>
    );
}
