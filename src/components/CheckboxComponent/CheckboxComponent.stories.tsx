import React from "react";
import {CheckboxComponent} from './CheckboxComponent';
import {IOnChange} from "../../Interfaces/IOnChange";
import {FormGroupComponent} from "../..";
import {FormControlLabelComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|Checkbox"
};

export const Default = () => {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (checked: boolean, event: IOnChange) => {
        setChecked(checked);
    };
    return (
        <CheckboxComponent
            checked={checked}
            onChange={handleChange}
            inputProps={{'aria-label': 'primary checkbox'}}
            color={"secondary"}
        />
    );
};
export const FormControlLabel = () => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [event.target.name]: checked});
    };

    return (
        <FormGroupComponent row>
            <FormControlLabelComponent
                color={"white"}
                control={<CheckboxComponent checked={state.checkedA} onChange={handleChange} name="checkedA"/>}
                label="Secondary"
            />
            <FormControlLabelComponent
                color={"white"}
                control={
                    <CheckboxComponent
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Primary"
            />
        </FormGroupComponent>
    )
};
