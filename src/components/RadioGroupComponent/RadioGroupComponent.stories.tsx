import React from "react";
import {RadioGroupComponent} from './RadioGroupComponent';
import {FormControlComponent, FormControlLabelComponent, FormLabelComponent, RadioComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|RadioGroup"
};

export const RadioGroup = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <div style={{
            margin: 'auto',
            display: 'flex',
            outline: 0,
            position: 'relative',
            justifyContent: 'center',
            width: 400,
        }}>
            <FormControlComponent component={"fieldset"}>
                <FormLabelComponent component={"legend"}>Gender</FormLabelComponent>
                <RadioGroupComponent name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabelComponent value={"female"} color={"text-primary"} control={<RadioComponent/>} label={"Female"}/>
                    <FormControlLabelComponent value={"male"} color={"text-primary"} control={<RadioComponent/>} label={"Male"}/>
                    <FormControlLabelComponent value={"other"} color={"text-primary"} control={<RadioComponent/>} label={"Other"}/>
                    <FormControlLabelComponent value={"disabled"} color={"text-primary"} control={<RadioComponent/>} label={"(Disabled option)"}/>
                </RadioGroupComponent>
            </FormControlComponent>
        </div>
    );
};
