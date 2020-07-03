import React from "react";
import {CheckboxComponent} from './CheckboxComponent';
import {IOnChange} from "../../Interfaces/IOnChange";

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
            inputProps={{ 'aria-label': 'primary checkbox' }}
            color={"secondary"}
        />
    );
};
