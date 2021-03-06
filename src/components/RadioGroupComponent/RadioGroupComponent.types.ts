import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";
import {IOnChange} from "../../Interfaces/IOnChange";

export interface IRadioGroupComponentProps {
    children: IChildren | ReactElement[];
    name: string;
    value: string;
    onChange: (event: IOnChange) => void;
}
