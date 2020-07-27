import * as React from "react";
import {ITextFieldComponentProps} from "./TextFieldComponent.types";
import "./TextFieldComponent.scss";
import {BEM} from "../../libs";
import {FormControlComponent, InputFieldComponent, isUndef} from "../..";
import {InputLabelComponent} from "../..";
import {useState} from "react";
import useFormLayout from "../../context/useFormLayout";
import {GetFile} from "../../libs/Images";

export function TextFieldComponent(props: ITextFieldComponentProps) {
    const bm = new BEM("TextField-component", {
        outline: props.outline,
    });
    bm.Append(props.className);
    const label = props.label;
    const [isUp, setIsUp] = useState(false);
    const [focus, setFocus] = useState(false);
    const [content, setContent] = useState(false);
    let value;
    if (props.type !== "file") {
        value = props.value;
    }
    const use = useFormLayout();
    if (use) {
        if (props.type !== "file") {
            value = isUndef(use.values[props.id]) ? props.value : use.values[props.id];
        }
    }
    const onFocus = (e) => {
        setIsUp(true);
        setFocus(true);
        props.onFocus && props.onFocus(e);
    };
    const onBlur = (e) => {
        if (!content) {
            setIsUp(false);
        }
        setFocus(false);
        props.onBlur && props.onBlur(e);
    };

    const onChange = (e) => {
        setContent(!!e.target.value);
        let value = e.target.value;
        if (props.type == "file") {
            GetFile(e, (d, url) => {
                use.addValue(props.id, {
                    file: d,
                    url: url,
                }, props);
                props.onChange && props.onChange(e);
            });
        } else {
            if (use) {
                use.addValue(props.id, value, props);
                props.onChange && props.onChange(e);
            }
        }
    };
    const InputElement = (
        <InputFieldComponent
            required={props.required}
            aria-describedby={props.helperTextId}
            autoComplete={props.autoComplete}
            autoFocus={props.autoFocus}
            value={value}
            fullWidth={props.fullWidth}
            multiline={props.multiline}
            name={props.name}
            rows={props.rows}
            rowsMax={props.rowsMax}
            type={props.type}
            id={props.id}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={props.placeholder}
        />
    );

    return (
        <FormControlComponent className={bm.toString()} focus={focus}>
            {label && (
                <InputLabelComponent isUp={isUp} htmlFor={props.id} className={"TextField-component__label TextField-component__label-form-control"}>
                    {`${label} ${props.required ? " *" : ""}`}
                </InputLabelComponent>
            )}
            {InputElement}
        </FormControlComponent>
    );
}
