import * as React from "react";
import {IRadioComponentProps} from "./RadioComponent.types";
import "./RadioComponent.scss";
import {BEM} from "../../libs";
import {IconComponent} from "../..";
import useRadioGroup from "../../context/useRadioGroup";
import createChainedFunction from "../../utils/createChainedFunction";

export function RadioComponent(props: IRadioComponentProps) {
    const {
        checked: checkedProp,
        color = 'secondary',
        name: nameProp,
        onChange: onChangeProp,
        ...other
    } = props;
    let checked = checkedProp;
    let name = nameProp;

    const bm = new BEM("Radio-component", {
        [props.color]: !!props.color,
    });

    const style = {
        transform: "scale(1)",
        transition: "transform 150ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    };
    const radioGroup = useRadioGroup();
    if (radioGroup) {
        if (typeof checked === 'undefined') {
            // @ts-ignore
            checked = radioGroup.value === props.value;
        }
        if (typeof name === 'undefined') {
            // @ts-ignore
            name = radioGroup.name;
        }
    }
    let onChange = () => {

    };
    // @ts-ignore
    if (onChangeProp || (radioGroup && radioGroup.onChange)) {
        // @ts-ignore
        onChange = createChainedFunction(onChangeProp, radioGroup && radioGroup.onChange);
    }
    return (
        <span
            className={bm.toString()}
        >
            <span className={"Radio-component__content"}>
                <input
                    type="radio"
                    name={name}
                    id={props.inputProps && props.inputProps.id}
                    checked={checked}
                    onChange={onChange}
                    value={props.value}
                />
                <IconComponent icon={"radio"}/>
                <IconComponent style={{
                    position: "absolute",
                    transform: "scale(0)",
                    transition: "transform 150ms cubic-bezier(0.4, 0, 1, 1) 0ms",
                    ...checked ? style : {},
                }} icon={"radioCircle"}/>
            </span>
        </span>
    );
}
