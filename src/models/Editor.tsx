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

    actionPlus(onClick) {
        return (
            <svg onClick={onClick} className="icon icon--plus" width="14px" height="14px">
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#plus"/>
            </svg>
        )
    }

    actionsPlus() {
        return (
            <div className="ce-toolbox">
                <li className="ce-toolbox__button" data-tool="table">
                    <svg width="18" height="14">
                        <path
                            d="M2.833 8v1.95a1.7 1.7 0 0 0 1.7 1.7h3.45V8h-5.15zm0-2h5.15V2.35h-3.45a1.7 1.7 0 0 0-1.7 1.7V6zm12.3 2h-5.15v3.65h3.45a1.7 1.7 0 0 0 1.7-1.7V8zm0-2V4.05a1.7 1.7 0 0 0-1.7-1.7h-3.45V6h5.15zM4.533.1h8.9a3.95 3.95 0 0 1 3.95 3.95v5.9a3.95 3.95 0 0 1-3.95 3.95h-8.9a3.95 3.95 0 0 1-3.95-3.95v-5.9A3.95 3.95 0 0 1 4.533.1z"/>
                    </svg>
                </li>
                <li className="ce-toolbox__button" data-tool="list">
                    <svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/>
                    </svg>
                </li>
                <li className="ce-toolbox__button" data-tool="warning">
                    <svg width="16" height="17" viewBox="0 0 320 294" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path
                            d="M160.5 97c12.426 0 22.5 10.074 22.5 22.5v28c0 12.426-10.074 22.5-22.5 22.5S138 159.926 138 147.5v-28c0-12.426 10.074-22.5 22.5-22.5zm0 83c14.636 0 26.5 11.864 26.5 26.5S175.136 233 160.5 233 134 221.136 134 206.5s11.864-26.5 26.5-26.5zm-.02-135c-6.102 0-14.05 8.427-23.842 25.28l-74.73 127.605c-12.713 21.444-17.806 35.025-15.28 40.742 2.527 5.717 8.519 9.175 17.974 10.373h197.255c5.932-1.214 10.051-4.671 12.357-10.373 2.307-5.702-1.812-16.903-12.357-33.603L184.555 70.281C174.608 53.427 166.583 45 160.48 45zm154.61 165.418c2.216 6.027 3.735 11.967 4.393 18.103.963 8.977.067 18.035-3.552 26.98-7.933 19.612-24.283 33.336-45.054 37.586l-4.464.913H61.763l-2.817-.357c-10.267-1.3-19.764-4.163-28.422-9.16-11.051-6.377-19.82-15.823-25.055-27.664-4.432-10.03-5.235-19.952-3.914-29.887.821-6.175 2.486-12.239 4.864-18.58 3.616-9.64 9.159-20.55 16.718-33.309L97.77 47.603c6.469-11.125 12.743-20.061 19.436-27.158 4.62-4.899 9.562-9.07 15.206-12.456C140.712 3.01 150.091 0 160.481 0c10.358 0 19.703 2.99 27.989 7.933 5.625 3.356 10.563 7.492 15.193 12.354 6.735 7.072 13.08 15.997 19.645 27.12l.142.24 76.986 134.194c6.553 10.46 11.425 19.799 14.654 28.577z"/>
                    </svg>
                </li>
                <li className="ce-toolbox__button" data-tool="code">
                    <svg width="14" height="14" viewBox="0 -1 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.177 6.852c.205.253.347.572.427.954.078.372.117.844.117 1.417 0 .418.01.725.03.92.02.18.057.314.107.396.046.075.093.117.14.134.075.027.218.056.42.083a.855.855 0 0 1 .56.297c.145.167.215.38.215.636 0 .612-.432.934-1.216.934-.457 0-.87-.087-1.233-.262a1.995 1.995 0 0 1-.853-.751 2.09 2.09 0 0 1-.305-1.097c-.014-.648-.029-1.168-.043-1.56-.013-.383-.034-.631-.06-.733-.064-.263-.158-.455-.276-.578a2.163 2.163 0 0 0-.505-.376c-.238-.134-.41-.256-.519-.371C.058 6.76 0 6.567 0 6.315c0-.37.166-.657.493-.846.329-.186.56-.342.693-.466a.942.942 0 0 0 .26-.447c.056-.2.088-.42.097-.658.01-.25.024-.85.043-1.802.015-.629.239-1.14.672-1.522C2.691.19 3.268 0 3.977 0c.783 0 1.216.317 1.216.921 0 .264-.069.48-.211.643a.858.858 0 0 1-.563.29c-.249.03-.417.076-.498.126-.062.04-.112.134-.139.291-.031.187-.052.562-.061 1.119a8.828 8.828 0 0 1-.112 1.378 2.24 2.24 0 0 1-.404.963c-.159.212-.373.406-.64.583.25.163.454.342.612.538zm7.34 0c.157-.196.362-.375.612-.538a2.544 2.544 0 0 1-.641-.583 2.24 2.24 0 0 1-.404-.963 8.828 8.828 0 0 1-.112-1.378c-.009-.557-.03-.932-.061-1.119-.027-.157-.077-.251-.14-.29-.08-.051-.248-.096-.496-.127a.858.858 0 0 1-.564-.29C8.57 1.401 8.5 1.185 8.5.921 8.5.317 8.933 0 9.716 0c.71 0 1.286.19 1.72.574.432.382.656.893.671 1.522.02.952.033 1.553.043 1.802.009.238.041.458.097.658a.942.942 0 0 0 .26.447c.133.124.364.28.693.466a.926.926 0 0 1 .493.846c0 .252-.058.446-.183.58-.109.115-.281.237-.52.371-.21.118-.377.244-.504.376-.118.123-.212.315-.277.578-.025.102-.045.35-.06.733-.013.392-.027.912-.042 1.56a2.09 2.09 0 0 1-.305 1.097c-.2.323-.486.574-.853.75a2.811 2.811 0 0 1-1.233.263c-.784 0-1.216-.322-1.216-.934 0-.256.07-.47.214-.636a.855.855 0 0 1 .562-.297c.201-.027.344-.056.418-.083.048-.017.096-.06.14-.134a.996.996 0 0 0 .107-.396c.02-.195.031-.502.031-.92 0-.573.039-1.045.117-1.417.08-.382.222-.701.427-.954z"/>
                    </svg>
                </li>
                <li className="ce-toolbox__button" data-tool="linkTool">
                    <svg width="13" height="14" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.567 13.629c.728.464 1.581.65 2.41.558l-.873.873A3.722 3.722 0 1 1 4.84 9.794L6.694 7.94a3.722 3.722 0 0 1 5.256-.008L10.484 9.4a5.209 5.209 0 0 1-.017.016 1.625 1.625 0 0 0-2.29.009l-1.854 1.854a1.626 1.626 0 0 0 2.244 2.35zm2.766-7.358a3.722 3.722 0 0 0-2.41-.558l.873-.873a3.722 3.722 0 1 1 5.264 5.266l-1.854 1.854a3.722 3.722 0 0 1-5.256.008L9.416 10.5a5.2 5.2 0 0 1 .017-.016 1.625 1.625 0 0 0 2.29-.009l1.854-1.854a1.626 1.626 0 0 0-2.244-2.35z"
                            transform="translate(-3.667 -2.7)"/>
                    </svg>
                </li>
                <li className="ce-toolbox__button" data-tool="image">
                    <svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"/>
                    </svg>
                </li>
                <li className="ce-toolbox__button" data-tool="raw">
                    <svg width="19" height="13">
                        <path
                            d="M18.004 5.794c.24.422.18.968-.18 1.328l-4.943 4.943a1.105 1.105 0 1 1-1.562-1.562l4.162-4.162-4.103-4.103A1.125 1.125 0 1 1 12.97.648l4.796 4.796c.104.104.184.223.239.35zm-15.142.547l4.162 4.162a1.105 1.105 0 1 1-1.562 1.562L.519 7.122c-.36-.36-.42-.906-.18-1.328a1.13 1.13 0 0 1 .239-.35L5.374.647a1.125 1.125 0 0 1 1.591 1.591L2.862 6.341z"/>
                    </svg>
                </li>
                <li className="ce-toolbox__button" data-tool="header">
                    <svg width="11" height="14" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M7.6 8.15H2.25v4.525a1.125 1.125 0 0 1-2.25 0V1.125a1.125 1.125 0 1 1 2.25 0V5.9H7.6V1.125a1.125 1.125 0 0 1 2.25 0v11.55a1.125 1.125 0 0 1-2.25 0V8.15z"/>
                    </svg>
                </li>
                <li className="ce-toolbox__button" data-tool="quote">
                    <svg width="15" height="14" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.53 6.185l.027.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.569-1.568l4.838-4.837L6.396 2.23A1.125 1.125 0 1 1 7.986.64l5.52 5.518.025.027zm-5.815 0l.026.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.568-1.568l4.837-4.837L.58 2.23A1.125 1.125 0 0 1 2.171.64L7.69 6.158l.025.027z"/>
                    </svg>
                </li>
                <li className="ce-toolbox__button" data-tool="checklist">
                    <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 15a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm0-2.394a5.106 5.106 0 1 0 0-10.212 5.106 5.106 0 0 0 0 10.212zm-.675-4.665l2.708-2.708 1.392 1.392-2.708 2.708-1.392 1.391-2.971-2.971L5.245 6.36l1.58 1.58z"/>
                    </svg>
                </li>
                <li className="ce-toolbox__button" data-tool="delimiter">
                    <svg width="19" height="4" viewBox="0 0 19 4" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 0H7a1.25 1.25 0 1 1 0 2.5H1.25a1.25 1.25 0 1 1 0-2.5zM11 0h5.75a1.25 1.25 0 0 1 0 2.5H11A1.25 1.25 0 0 1 11 0z"/>
                    </svg>
                </li>
            </div>
        )
    }
}
