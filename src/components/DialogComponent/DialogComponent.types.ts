import {IChildren} from "../../Interfaces/IChildren";

export interface IDialogComponentProps {
    portal?: boolean;
    open: boolean;
    onClose: () => any;
    children: IChildren | IChildren[];
}
