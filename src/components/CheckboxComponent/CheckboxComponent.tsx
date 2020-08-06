import * as React from "react";
import {ICheckboxComponentProps} from "./CheckboxComponent.types";
import "./CheckboxComponent.scss";
import {BEM} from "../../libs";
import {IconComponent, isUndef} from "../..";
import useFormLayout from "../../context/useFormLayout";
import {useEffect, useState} from "react";

export function CheckboxComponent(props: ICheckboxComponentProps) {
    const [initial, setInitial] = useState(false);
    const use = useFormLayout();
    const bm = new BEM("Checkbox-component", {
        [props.color]: !!props.color,
    });
    let value = !!props.checked;
    if (use) {
        if (use.values && props.id in use.values) {
            value = isUndef(use.values[props.id]) ? !!props.checked : !!use.values[props.id];
        }
    }
    useEffect(() => {
        if (!initial && use && use.values) {
            use.addValue && use.addValue(props.id, isUndef(use.values[props.id]) ? !!props.checked : !!use.values[props.id], props);
            setInitial(true);
        }
    });
    const onChange = (e) => {
        if (use && use.addValue) use.addValue(props.id, e.target.checked, props);
        props.onChange && props.onChange(e.target.checked, e);
    };
    return (
        <span
            className={bm.toString()}
        >
            <span className={"Checkbox-component__content"}>
                <input
                    type="checkbox"
                    name={props.inputProps && props.inputProps.name || props.name}
                    id={props.inputProps && props.inputProps.id}
                    checked={value}
                    onChange={onChange}
                />
                <IconComponent icon={value ? "check" : "uncheck"}/>
            </span>
        </span>
    );
}
