import * as React from "react";
import {IEditorBlockComponentProps} from "./EditorBlockComponent.types";
import "./EditorBlockComponent.scss";
import {BEM} from "../../libs";
import {useEditorContext} from "../../models/Editor";

export function EditorBlockComponent(props: IEditorBlockComponentProps) {
    const use = useEditorContext();
    const bm = new BEM("EditorBlock-component", {
        focused: use.editor.getFocus() == props.index,
    });
    const onClick = (e) => {
        use.onClick(props.index, {
            top: e.currentTarget.offsetTop,
        });
    };
    const onInput = (e) => {
        console.log(e);
    };
    return (
        <div
            onClick={onClick}
            className={bm.toString()}
        >
            <div className="EditorBlock-component__content">
                {props.children}
            </div>
        </div>
    );
}
