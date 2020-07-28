import * as React from "react";
import {ISelectComponentProps} from "./SelectComponent.types";
import "./SelectComponent.scss";
import {BEM} from "../../libs";
import useFormLayout from "../../context/useFormLayout";
import {useState} from "react";
import {useEffect} from "react";
import {isUndef} from "../../utils";

export function SelectComponent(props: ISelectComponentProps) {
    const [initial, setInitial] = useState(false);
    const bm = new BEM("Select-component", {});
    bm.Append(props.className);
    const use = useFormLayout();
    let value = props.value;
    if (use) {
        value = use.values[props.id];
    }
    useEffect(() => {
        if (!initial) {
            use.addValue(props.id, isUndef(use.values[props.id]) ? props.value : use.values[props.id], props);
            setInitial(true);
        }
    });
    const onChange = (e) => {
        if (use) {
            use.addValue(props.id, e.target.value, props);
        }
        props.onChange && props.onChange(e);
    };
    return (
        <select
            onChange={onChange}
            style={props.style}
            value={value}
            className={bm.toString()}
        >
            {props.options.map((value, index) => (
                <option key={index} value={value.value}>{value.label}</option>
            ))}
        </select>
    );
}
