import {EditorData, EditorDataData, EditorDataEnum, EditorDataImage, EditorDataList, EditorDataType} from "./EditorData";
import * as React from "react";
import {DelimiterComponent, ListComponent, ListItemComponent, TypographyComponent} from "..";
import {EditorBlockComponent} from "../components/EditorComponent/EditorBlockComponent";
import {ImageToolComponent} from "../components/ImageToolComponent/ImageToolComponent";

export const EditorContext = React.createContext(null);
export const useEditorContext = () => {
    return React.useContext(EditorContext);
};

export interface IEditorOn {
    onInput: (e: any, type: EditorDataEnum) => void;
}

export class Editor {
    private data: EditorData[];
    private focus = null;
    private focusTop = 0;
    private onInput;

    constructor(data: EditorData[], on: IEditorOn) {
        this.data = data;
        this.onInput = on.onInput;
    }

    private types(type: EditorDataEnum, data: EditorDataType) {
        switch (type) {
            case EditorDataEnum.PARAGRAPH: {
                let editor = data as EditorDataData;
                return (
                    <TypographyComponent className={"ce-Paragraph"} component={`div`}>
                        <span dangerouslySetInnerHTML={{__html: editor.text}} contentEditable={"true"} suppressContentEditableWarning={true} onBlur={ee => this.onInput(ee, EditorDataEnum.PARAGRAPH)}/>
                    </TypographyComponent>
                );
            }
            case EditorDataEnum.DELIMITER: {
                return (
                    <DelimiterComponent/>
                )
            }
            case EditorDataEnum.HEADER: {
                let editor = data as EditorDataData;
                return (
                    <TypographyComponent className={"ce-Header"} component={`h${editor.level}`}>
                        <span dangerouslySetInnerHTML={{__html: editor.text}} contentEditable={"true"} suppressContentEditableWarning={true} onBlur={ee => this.onInput(ee, EditorDataEnum.HEADER)}/>
                    </TypographyComponent>
                );
            }
            case EditorDataEnum.LIST: {
                let editor = data as EditorDataList;

                return (
                    <ListComponent component={"ul"} className={`ce-List ce-List--${editor.style}`}>
                        {editor.items.map((item, index) => (
                            <ListItemComponent className={"ce-ListItem"} component={"li"} key={index}>
                                {item}
                            </ListItemComponent>
                        ))}
                    </ListComponent>
                );
            }
            case EditorDataEnum.IMAGE: {
                let editor = data as EditorDataImage;

                return (
                    <ImageToolComponent
                        caption={editor.caption}
                        image={editor.file.url}
                    />
                );
            }
        }
        return null;
    }

    render() {
        return this.data.map((item, index) => {
            return (
                <EditorBlockComponent index={index.toString()} key={index}>
                    {this.types(item.type, item.data)}
                </EditorBlockComponent>
            )
        });
    }

    button(onClick) {
        return (
            <svg style={{
                padding: 20,
            }} onClick={onClick} id="dots" viewBox="0 0 18 4">
                <g fillRule="evenodd">
                    <circle cx="9" cy="2" r="2"/>
                    <circle cx="2" cy="2" r="2"/>
                    <circle cx="16" cy="2" r="2"/>
                </g>
            </svg>
        )
    }

    private _actionSymbols() {
        return (
            <div style={{
                display: "none"
            }}>
                <svg xmlns="http://www.w3.org/2000/svg">
                    <symbol id="arrow-down" viewBox="0 0 14 14">
                        <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>
                    </symbol>
                    <symbol id="arrow-up" viewBox="0 0 14 14">
                        <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>

                    </symbol>
                    <symbol id="bold">
                        <path
                            d="M5.997 14H1.72c-.618 0-1.058-.138-1.323-.415C.132 13.308 0 12.867 0 12.262V1.738C0 1.121.135.676.406.406.676.136 1.114 0 1.719 0h4.536c.669 0 1.248.041 1.738.124.49.083.93.242 1.318.478a3.458 3.458 0 0 1 1.461 1.752c.134.366.2.753.2 1.16 0 1.401-.7 2.426-2.1 3.075 1.84.586 2.76 1.726 2.76 3.42 0 .782-.2 1.487-.602 2.114a3.61 3.61 0 0 1-1.623 1.39 5.772 5.772 0 0 1-1.471.377c-.554.073-1.2.11-1.939.11zm-.21-6.217h-2.95v4.087h3.046c1.916 0 2.874-.69 2.874-2.072 0-.707-.248-1.22-.745-1.537-.496-.319-1.238-.478-2.225-.478zM2.837 2.13v3.619h2.597c.707 0 1.252-.067 1.638-.2.385-.134.68-.389.883-.765.16-.267.239-.566.239-.897 0-.707-.252-1.176-.755-1.409-.503-.232-1.27-.348-2.301-.348H2.836z"/>
                    </symbol>
                    <symbol id="cross" viewBox="0 0 237 237">
                        <path transform="rotate(45 280.675 51.325)"
                              d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>

                    </symbol>
                    <symbol id="dots" viewBox="0 0 18 4">
                        <g fillRule="evenodd">
                            <circle cx="9" cy="2" r="2"/>
                            <circle cx="2" cy="2" r="2"/>
                            <circle cx="16" cy="2" r="2"/>
                        </g>

                    </symbol>
                    <symbol id="italic">
                        <path
                            d="M19.211 15.326l-1.44 7.108c-.1.493-.305.865-.615 1.117a1.64 1.64 0 0 1-1.064.379c-.4 0-.697-.13-.894-.388-.197-.258-.247-.627-.15-1.108l1.426-7.036c.098-.486.297-.853.597-1.1.299-.245.648-.368 1.047-.368.399 0 .703.123.912.369.21.246.27.588.181 1.027zm-.831-2.663c-.38 0-.682-.116-.909-.35-.227-.232-.301-.561-.223-.987.07-.385.266-.703.588-.952.322-.25.665-.374 1.03-.374.353 0 .645.113.876.34.232.225.308.554.229.986-.077.42-.27.747-.58.983-.308.236-.646.354-1.011.354z"/>

                    </symbol>
                    <symbol id="link">
                        <path
                            d="M15.439 21.153a4.202 4.202 0 0 0 2.72.63l-.985.986a4.202 4.202 0 1 1-5.943-5.945l2.093-2.093a4.202 4.202 0 0 1 5.934-.009l-1.655 1.656a5.886 5.886 0 0 1-.02.019 1.835 1.835 0 0 0-2.585.009l-2.093 2.093a1.836 1.836 0 0 0 2.534 2.654zm3.122-8.306a4.202 4.202 0 0 0-2.72-.63l.985-.986a4.202 4.202 0 1 1 5.943 5.945l-2.093 2.093a4.202 4.202 0 0 1-5.934.009l1.655-1.656.02-.019a1.835 1.835 0 0 0 2.585-.009l2.093-2.093a1.836 1.836 0 0 0-2.534-2.654z"/>
                    </symbol>
                    <symbol id="plus" viewBox="0 0 14 14">
                        <path d="M8.05 5.8h4.625a1.125 1.125 0 0 1 0 2.25H8.05v4.625a1.125 1.125 0 0 1-2.25 0V8.05H1.125a1.125 1.125 0 0 1 0-2.25H5.8V1.125a1.125 1.125 0 0 1 2.25 0V5.8z"/>

                    </symbol>
                    <symbol id="sad-face" viewBox="0 0 52 52">
                        <path fill="#D76B6B" fillRule="nonzero"
                              d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/>

                    </symbol>
                    <symbol id="unlink" viewBox="0 0 16 18">
                        <path transform="rotate(-45 8.358 11.636)"
                              d="M9.14 9.433c.008-.12-.087-.686-.112-.81a1.4 1.4 0 0 0-1.64-1.106l-3.977.772a1.4 1.4 0 0 0 .535 2.749l.935-.162s.019 1.093.592 2.223l-1.098.148A3.65 3.65 0 1 1 2.982 6.08l3.976-.773c1.979-.385 3.838.919 4.28 2.886.51 2.276-1.084 2.816-1.073 2.935.011.12-.394-1.59-1.026-1.696zm3.563-.875l2.105 3.439a3.65 3.65 0 0 1-6.19 3.868L6.47 12.431c-1.068-1.71-.964-2.295-.49-3.07.067-.107 1.16-1.466 1.48-.936-.12.036.9 1.33.789 1.398-.656.41-.28.76.13 1.415l2.145 3.435a1.4 1.4 0 0 0 2.375-1.484l-1.132-1.941c.42-.435 1.237-1.054.935-2.69zm1.88-2.256h3.4a1.125 1.125 0 0 1 0 2.25h-3.4a1.125 1.125 0 0 1 0-2.25zM11.849.038c.62 0 1.125.503 1.125 1.125v3.4a1.125 1.125 0 0 1-2.25 0v-3.4c0-.622.503-1.125 1.125-1.125z"/>

                    </symbol>
                </svg>
            </div>
        );
    }

    actions(obj: { up: () => void; close: () => void; down: () => void; }) {
        return (
            <>
                {this._actionSymbols()}
                <div className={"ce-ActionIcons"}>
                    <div className="ce-settings__default-zone">
                        <div className="ce-settings__button ce-tune-move-up" onClick={obj.up}>
                            <svg className="icon icon--arrow-up" width="14px" height="14px">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#arrow-up"/>
                            </svg>
                        </div>
                        <div className="ce-settings__button ce-settings__button--delete" onClick={obj.close}>
                            <svg className="icon icon--cross" width="12px" height="12px">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#cross"/>
                            </svg>
                        </div>
                        <div className="ce-settings__button ce-tune-move-down" onClick={obj.down}>
                            <svg className="icon icon--arrow-down" width="14px" height="14px">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#arrow-down"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    public setFocus(focus: string) {
        this.focus = focus;
    }

    getFocus() {
        return this.focus;
    }

    public setFocusTop(top: number) {
        this.focusTop = top;
    }

    public getFocusTop() {
        return this.focusTop;
    }

    componentDidMount(callback) {
        document.addEventListener("keydown", e => this.onScape(e, callback));
    }

    componentWillUnmount() {
        // @ts-ignore
        document.removeEventListener("keydown", this.onScape);
    }

    private onScape(evt: KeyboardEvent, callback: any) {
        // @ts-ignore
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            callback();
        }
    }

    close() {
        this.data = this.data.filter((item, index) => index != this.focus);
    }

    down() {
        if (this.focus != this.data.length - 1) {
            this.data.splice(Number(this.focus) + 1, 0, this.data.splice(Number(this.focus), 1)[0]);
            this.focus = null;
        }
    }

    up() {
        if (this.focus != "0") {
            this.data.splice(Number(this.focus) - 1, 0, this.data.splice(Number(this.focus), 1)[0]);
            this.focus = null;
        }
    }

    setText(innerHTML: string) {
        let a = this.data[this.focus].data as EditorDataData;
        a.text = innerHTML;
    }
}
