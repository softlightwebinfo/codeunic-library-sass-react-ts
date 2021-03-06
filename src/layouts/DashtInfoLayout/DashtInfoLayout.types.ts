import {IChildren} from "../../Interfaces/IChildren";
import {ReactChild} from "react";

export interface IDashtInfoLayoutProps {
    content?: (props: IDashtInfoLayoutProps) => ReactChild;
    className?: string;
    icon: string;
    title: string;
    children: IChildren | IChildren[] | any;
}
