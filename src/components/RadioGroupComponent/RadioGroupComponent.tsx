import * as React from "react";
import {IRadioGroupComponentProps} from "./RadioGroupComponent.types";
import "./RadioGroupComponent.scss";
import {BEM} from "../../libs";
import {useState} from "react";
import RadioGroupContext from "../../context/RadioGroupContext";
import useId from "../../utils/useId";

export function RadioGroupComponent(props: IRadioGroupComponentProps) {
    const bm = new BEM("RadioGroup-component", {});
    const [value, setValue] = useState(props.value);

    const handleChange = (event) => {
        setValue(event.target.value);
        props.onChange && props.onChange(event);
    };
    const name = useId(props.name);
    return (
        // @ts-ignore
        <RadioGroupContext.Provider value={{name, onChange: handleChange, value}}>
            <div
                className={bm.toString()}
            >
                {props.children}
            </div>
        </RadioGroupContext.Provider>
    );
}
