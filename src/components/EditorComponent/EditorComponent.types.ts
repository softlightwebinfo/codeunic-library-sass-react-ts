import {EditorData} from "../../models/EditorData";
import {Editor} from "../../models/Editor";

export interface IEditorComponentProps {
    data: EditorData[];
    isEditor?: boolean;
    onSave?: (e: Editor) => void;
}
