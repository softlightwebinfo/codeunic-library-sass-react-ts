import {IChildren} from "../../Interfaces/IChildren";
import {EditorDataEnum} from "../../models/EditorData";

export interface IEditorBlockComponentProps {
    children: IChildren;
    index: string;
    //type: EditorDataEnum;
}
