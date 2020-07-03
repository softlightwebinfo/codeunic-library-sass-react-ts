import * as React from "react";
import {ICheckboxComponentProps} from "./CheckboxComponent.types";
import "./CheckboxComponent.scss";
import {BEM} from "../../libs";
import {IconComponent} from "../..";

export function CheckboxComponent(props: ICheckboxComponentProps) {
    const bm = new BEM("Checkbox-component", {
        [props.color]: !!props.color,
    });
    const onChange = (e) => {
        props.onChange(e.target.checked, e);
    };
    return (
        <span
            className={bm.toString()}
        >
            <span className={"Checkbox-component__content"}>
                <input
                    type="checkbox"
                    name={props.inputProps.name}
                    id={props.inputProps.id}
                    checked={props.checked}
                    onChange={onChange}
                />
                <IconComponent icon={props.checked ? "check" : "uncheck"}/>
            </span>
        </span>
    );
}
